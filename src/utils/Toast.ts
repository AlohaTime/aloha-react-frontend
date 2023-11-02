import toast from "react-hot-toast";

export const customErrorToast = (message: string) => {
  return toast.error(message, {
    id: "customErrorToast",
    style: {
      border: "1px solid #ddd",
      boxShadow: "none",
      fontSize: "12px",
      color: "#333",
    },
    iconTheme: {
      primary: "#5886c7",
      secondary: "#FFFAEE",
    },
  });
};
