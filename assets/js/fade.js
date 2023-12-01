
    window.onload = () => {
        const anchors = document.querySelectorAll('a');
        const transition_el = document.querySelector('.transition');
 
      
        setTimeout(() => {
          transition_el.classList.remove('is_active');
        }, 500);
      
       
          for (var idx = 0; idx < anchors.length; idx += 1) {
          if (anchors[idx].hostname !== window.location.hostname ||
            anchors[idx].pathname === window.location.pathname || 
            anchors[idx].classList.contains("no-nav")) {
            continue;
          anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.currentTarget.href;
      
            console.log(transition_el);
      
            transition_el.classList.add('is_active');
      
            console.log(transition_el);
      
            setInterval(() => {
              window.location.href = target;
            }, 300);
          })
        }
      }
    }