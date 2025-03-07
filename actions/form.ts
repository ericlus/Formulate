"use server"

import { calcFormStats } from "@/lib/calcFormStats";
import { prisma } from "@/lib/prisma";
import { formSchema, FormSchemaType } from "@/schemas/form";
import { currentUser } from "@clerk/nextjs/server"

class UserNotFoundErr extends Error {}

export async function GetFormStats() {
    const user = await currentUser();
    if (!user) {
        throw new UserNotFoundErr()
    }

    const stats = await prisma.form.aggregate({
        where: {
            userId: user.id,
        },
        _sum: {
            visits: true,
            submissions: true
        }
    })

    const visits = stats._sum.visits || 0;
    const submissions = stats._sum.submissions || 0;

    return calcFormStats(visits, submissions)
 }

 export async function CreateForm(data: FormSchemaType) {
    const validation = formSchema.safeParse(data);
    if (!validation.success) {
        throw new Error ('Form not valid')
    }

    const user = await currentUser();
    if (!user) {
        throw new UserNotFoundErr();
    }

    const { name, description }  = data

    const form = await prisma.form.create({
        data: {
            userId: user.id,
            name,
            description
        }
    })

    if (!form) {
        throw new Error('Something went wrong in form creation')
    }

    return form.id
 }

 export async function GetForms() {
    const user = await currentUser();
    if (!user) {
        throw new UserNotFoundErr()
    }

    const forms = await prisma.form.findMany({
        where: {
            userId: user.id
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return forms
 }

 export async function GetFormById(id: number) {
    const user = await currentUser();
    if (!user) {
        throw new UserNotFoundErr()
    }

    const form = await prisma.form.findUnique({
        where: {
            userId : user.id,
            id
        }
    })

    return form
 }

 export async function UpdateFormContent(id: number, jsonContent: string) {
    const user = await currentUser();
    if (!user) {
        throw new UserNotFoundErr()
    }

    return await prisma.form.update({
        where: {
            userId: user.id,
            id,
        },
        data: {
            content: jsonContent
        }
    })
 }

 export async function PublishForm(id: number) {
    const user = await currentUser();
    if (!user) {
        throw new UserNotFoundErr()
    }

    return await prisma.form.update({
        where: {
            userId: user.id,
            id,
        },
        data: {
            published: true
        }
    })
 }

 export async function GetFormContentByUrl(formUrl: string) {
    return await prisma.form.update({
        where: {
            shareURL: formUrl
        },
        select: {
            content: true
        },
        data: {
            visits: {
                increment: 1
            }
        }
    })
 }

 export async function SubmitForm(formUrl: string, jsonContent: string) {
    return await prisma.form.update({
        where: {
            shareURL: formUrl,
            published: true
        },
        data: {
            submissions: {
                increment: 1
            },
            FormSubmissions: {
                create: {
                    content: jsonContent
                }
            }
        }
    })
 }

 export async function GetFormWithSubmissions(id: number) {
    const user = await currentUser();
    if (!user) {
        throw new UserNotFoundErr()
    }

    const form = await prisma.form.findUnique({
        where: {
            userId : user.id,
            id,
        },
        include: {
            FormSubmissions: true
        }
    })

    return form
 }