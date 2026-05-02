import Swal from "sweetalert2"

const alert = {
    success : (message : string , confirmText = "OK" , cancelText = "Cancel") => {
        return Swal.fire({
            title : "Success",
            text : message,
            icon : "success",
            confirmButtonText : confirmText,
            cancelButtonText : cancelText,
        });
    },
    error : (message : string , confirmText = "OK" , cancelText = "Cancel") => {
        return Swal.fire({
            title : "Error",
            text : message,
            icon : "error",
            confirmButtonText : confirmText,
            cancelButtonText : cancelText,
        });
    },
    warning : (message : string , confirmText = "OK" , cancelText = "Cancel") => {
        return Swal.fire({
            title : "Warning",
            text : message,
            icon : "warning",
            confirmButtonText : confirmText,
            cancelButtonText : cancelText,
        });
    },
    info : (message : string , confirmText = "OK" , cancelText = "Cancel") => {
        return Swal.fire({
            title : "Info",
            text : message,
            icon : "info",
            confirmButtonText : confirmText,
            cancelButtonText : cancelText,
        });
    },
    question : (message : string , confirmText = "OK" , cancelText = "Cancel") => {
        return Swal.fire({
            title : "Question",
            text : message,
            icon : "question",
            confirmButtonText : confirmText,
            cancelButtonText : cancelText,
        });
    },
    loading : (message : string) => {
        Swal.fire({
            title : "Loading",
            text : message,
            allowOutsideClick : false,
            didOpen : () => {
                Swal.showLoading();
            }
        });
    },
    close : () => {
        Swal.close();
    }
}

export default alert;