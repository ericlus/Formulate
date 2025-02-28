import { useEffect, useState } from "react";

function useFormShareUrl(shareUrl: string) {
  const [formShareUrl, setFormShareUrl] = useState("");

  useEffect(() => {
    setFormShareUrl(`${window.location.origin}/submit/${shareUrl}`);
  }, [shareUrl]);

  return formShareUrl;
}

export default useFormShareUrl;
