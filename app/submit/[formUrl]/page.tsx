import React from "react";

type SubmitPageProps = {
  params: {
    formUrl: string;
  };
};

function SubmitPage({ params }: SubmitPageProps) {
  return <div>Submit Page: {params.formUrl}</div>;
}

export default SubmitPage;
