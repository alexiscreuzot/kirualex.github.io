($ document).ready ->
  
  audio = document.getElementById('audio')
  button = ($ 'button.bam')
  flash = ($ '.flash')

  button.bind('touchstart', ->
  	button.attr(':active')
  )

  button.bind('click touchend', ->
    audio.currentTime = 0;
    audio.play();
    flash.show()
    flash.fadeOut()
  )