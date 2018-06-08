$(document).ready(() => {
  let isSidebarOpen = true
  function truncateText(maxLength) {
    var truncated = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at dignissim magna. Nunc convallis fermentum nisi, maximus ultrices libero aliquam id. Donec sed dui iaculis, tincidunt eros vel, ullamcorper elit. Maecenas commodo erat ut leo rhoncus'+
      'pharetra. In tincidunt sodales faucibus. Sed laoreet pellentesque gravida. Curabitur vitae auctor velit. Pellentesque vitae sagittis nisl. Sed non lectus id dolor consectetur molestie vel quis ipsum. Cras varius, velit sed lobortis blandit, justo'+
      'est malesuada diam, at ultrices magna mauris at tellus. Vivamus quis nisl erat. Nullam vestibulum volutpat felis, quis efficitur metus rhoncus vitae. Duis libero erat, viverra et tellus eget, pretium pretium nunc. Donec ullamcorper nibh metus, et'+
      'volutpat lectus tincidunt vitae. Aliquam erat volutpat.'

    if (truncated.length > maxLength) {
        truncated = truncated.substr(0,maxLength-3) + '...';
    }
    return truncated;
  }
  $('#icon').click(() => {
    if(isSidebarOpen === true) {
      $('.sidebar').css('display','none')
      isSidebarOpen = false
    } else {
      $('.sidebar').css('display','flex')
      isSidebarOpen = true
    }
  })
  $('.truncated-paragraph').html(truncateText(169))
})
