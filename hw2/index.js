// Your code goes here:

let findPic = function(event){
  // console.log("clicked")
  let imageClicked = jQuery(event.target)
  // console.log(imageClicked)
  let srcValue = imageClicked.attr("src")
  // console.log(srcValue)
  jQuery("#main-image").attr("src", srcValue)
}

jQuery("#thumbnails").click(findPic)
