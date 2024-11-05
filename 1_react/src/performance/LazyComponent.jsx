const LazyComponent = () => {

  if(Math.random()>0.5){
    console.log('error');
    return new Error("Testing error boundary!!!");
  }

  return (
    <div>
      <img
        src="https://c4.wallpaperflare.com/wallpaper/585/931/634/valley-mountain-clouds-blue-sky-trees-house-wallpaper-preview.jpg" alt=""
        style={{ width: '50%', height: '50%' }} />
      <img
        src="https://wallpapercave.com/wp/DVSIcHH.jpg" alt=""
        style={{ width: '50%', height: '50%' }} />
      <img src="https://wallpapercave.com/wp/wp5593679.jpg" alt=""
        style={{ width: '50%', height: '50%' }} />
      <img
        src="https://th.bing.com/th/id/OIP.AnQ0xQBdmRevDGrR-w0dWgHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain" alt=""
        style={{ width: '50%', height: '50%' }} />
      <img
        src="https://th.bing.com/th/id/OIP.v9zq-5joJql6K8_RGgn_8AHaEK?w=728&h=410&rs=1&pid=ImgDetMain" alt=""
        style={{ width: '50%', height: '50%' }} />
      <img
        src="https://wallpapercave.com/wp/wp7422945.jpg" alt=""
        style={{ width: '50%', height: '50%' }} />
      <img
        src="https://th.bing.com/th/id/R.d63e01b51736d0111be1b534b926a624?rik=FtDK7ksLuYZvZA&pid=ImgRaw&r=0" alt=""
        style={{ width: '50%', height: '50%' }} />
      <img
        src="https://th.bing.com/th/id/OIP.S_3GHLGzPTpAk6YEzpUxqgEzDL?w=1000&h=662&rs=1&pid=ImgDetMain" alt=""
        style={{ width: '50%', height: '50%' }} />
      <img
        src="https://th.bing.com/th/id/OIP.q2GGPgtl7yUtFttbqOjxiwHaEK?rs=1&pid=ImgDetMain" alt="" style={{ width: '50%', height: '50%' }} />
      <img
        src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Beautiful-3d-nature-wallpapers.jpg" alt=""
        style={{ width: '50%', height: '50%' }} />
      <img
        src="https://th.bing.com/th/id/OIP.RkzMn6tXOsL6Yc1N-bb-yAHaE7?rs=1&pid=ImgDetMain" alt="" style={{ width: '50%', height: '50%' }} />

    </div>
  )
}
export default LazyComponent;