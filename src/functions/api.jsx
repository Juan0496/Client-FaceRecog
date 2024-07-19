export const sendMessage = async (canvas,setImageUrl) => {  
    const setimageUrl = setImageUrl;
    const canVas = canvas
    canVas.toBlob((blob) => {
      const formData = new FormData();
      formData.append('file', blob, 'capture.png');
      fetch('http://127.0.0.1:8000/recibir/', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {const res = data.respuesta; return(res)})
      .then(res => setimageUrl(res))       
      .catch(error => {
        console.error('Error:', error);
      });
    }, 'image/png');  
  };
  /*
  canVas.toBlob((blob) => {
      const formData = new FormData();
      formData.append('file', blob, 'capture.png');
      fetch('http://127.0.0.1:8000/recibir/', {
        method: 'POST',
        body: formData,
      })
      
  .then(response => response.blob())
      .then(data => {
        const imageObjectURL = URL.createObjectURL(data);
        setimageUrl(imageObjectURL);       
      })*/