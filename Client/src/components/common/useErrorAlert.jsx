import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const useErrorAlert = (message, statusCode) => {
  const MySwal = withReactContent(Swal);
  let timerInterval;

 const paseMessage = JSON.parse(message) 

  MySwal.fire({
    title: statusCode,
    html:  paseMessage.message ,
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();

      timerInterval = setInterval(() => {
        
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    // if (result.dismiss === Swal.DismissReason.timer) {
    //   console.log("I was closed by the timer");
    // }
  });
};

export default useErrorAlert;
