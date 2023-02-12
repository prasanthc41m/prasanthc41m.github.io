// utilities
var get = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelector(selector);
};

var getAll = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelectorAll(selector);
};

// setup typewriter effect in the terminal demo
if (document.getElementsByClassName('demo').length > 0) {
  var i = 0;
  var txt = `whoami

      A seasoned and accomplished cybersecurity professional with over a decade of experience in the IT industry. With 3 years of dedicated experience in cybersecurity and a proven track record of identifying and reporting vulnerabilities, I have the skills, knowledge, and drive to tackle complex security challenges. My expertise in systems, networks, and security combined with my certifications and volunteer work demonstrates my commitment to staying current in the ever-evolving field of cybersecurity.

Achievements:

- Contributed to the identification and mitigation of a critical vulnerability (XSS) in Codologic's forum application, Codoforum and recognized by The MITRE Corporation and Exploit Databas
- Published finding on Portswigger Web Security's website on January 13, 2020 titled "Codoforum software patched against stored XSS vulnerability" , demonstrating expertise in web security

- The MITRE Corporation – CVE-2020-5842
  Codoforum 4.8.3 allows XSS in the user registration page which allows to compromise administrators
- Exploit Database – EDB-ID: 47876
  Codoforum 4.8.3 – Persistent Cross-Site Scripting
- Exploit Database – GHDB-ID: 5689
  Google Dork Description: intext:”powered by codoforum”inurl:”/user/login”  

Volunteer Experience:

- Volunteer at Kerala Police Cyberdome (2020 - Present)
- Chapter Leader at OWASP Kannur Chapter (2021 - Present)

Training and Certifications:

- EC-Council Certified Security Analyst (ECSA V9) - Feb 2019 - Feb 2025
- Certified Security Analyst (CSA) - 2018
- Apple Certified Support Professional 10.7 (ACSP) - Jul 2012
- Certified Arcos PAM Implementor (CAPI)
- Cisco Certified Network Associate (CCNA)
- Microsoft Certified Systems Engineer (MCSE)

Conferences:

- Organized multiple events as a Chapter Leader at OWASP Kannur Chapter in 2022
- Provided technical support at the Cyber Security Summit 2021 "Real Time Real Attack" hosted by Cyberdome Kozhikode
- Organized Retrain-2021, Adversary Emulation - A Practical Approach with eHackify Cybersecurity Research & Trainings
- Provided technical support at Redteam Hacker Academy's Redteam Security Summit-2018, Cyber Security & Hacking Conference

Interests:

- Reading blogs and articles, bug-hunting, creating CTFs, supporting and contributing to the cybersecurity community, and more.

  `;
  var speed = 10;

  function typeItOut () {
    if (i < txt.length) {
      document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  }

  setTimeout(typeItOut, 1800);
}

// toggle tabs on codeblock
window.addEventListener("load", function() {
  // get all tab_containers in the document
  var tabContainers = getAll(".tab__container");

  // bind click event to each tab container
  for (var i = 0; i < tabContainers.length; i++) {
    get('.tab__menu', tabContainers[i]).addEventListener("click", tabClick);
  }

  // each click event is scoped to the tab_container
  function tabClick (event) {
    var scope = event.currentTarget.parentNode;
    var clickedTab = event.target;
    var tabs = getAll('.tab', scope);
    var panes = getAll('.tab__pane', scope);
    var activePane = get(`.${clickedTab.getAttribute('data-tab')}`, scope);

    // remove all active tab classes
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    // remove all active pane classes
    for (var i = 0; i < panes.length; i++) {
      panes[i].classList.remove('active');
    }

    // apply active classes on desired tab and pane
    clickedTab.classList.add('active');
    activePane.classList.add('active');
  }
});

//in page scrolling for documentaiton page
var btns = getAll('.js-btn');
var sections = getAll('.js-section');

function setActiveLink(event) {
  // remove all active tab classes
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function smoothScrollTo(element, event) {
  setActiveLink(event);

  window.scrollTo({
    'behavior': 'smooth',
    'top': element.offsetTop - 20,
    'left': 0
  });
}

if (btns.length && sections.length > 0) {
// for (var i = 0; i<btns.length; i++) {
//   btns[i].addEventListener('click', function(event) {
//     smoothScrollTo(sections[i], event);
//   });
// }
  btns[0].addEventListener('click', function (event) {
    smoothScrollTo(sections[0], event);
  });

  btns[1].addEventListener('click', function (event) {
    smoothScrollTo(sections[1], event);
  });

  btns[2].addEventListener('click', function (event) {
    smoothScrollTo(sections[2], event);
  });

  btns[3].addEventListener('click', function (event) {
    smoothScrollTo(sections[3], event);
  });
}

// fix menu to page-top once user starts scrolling
window.addEventListener('scroll', function () {
  var docNav = get('.doc__nav > ul');

  if( docNav) {
    if (window.pageYOffset > 63) {
      docNav.classList.add('fixed');
    } else {
      docNav.classList.remove('fixed');
    }
  }
});

// responsive navigation
var topNav = get('.menu');
var icon = get('.toggle');

window.addEventListener('load', function(){
  function showNav() {
    if (topNav.className === 'menu') {
      topNav.className += ' responsive';
      icon.className += ' open';
    } else {
      topNav.className = 'menu';
      icon.classList.remove('open');
    }
  }
  icon.addEventListener('click', showNav);
});
