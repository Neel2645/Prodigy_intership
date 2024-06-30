//!     Typing Animation

var typed = new Typed(".typing",{

    strings:[ ""," Web Designer"," Web Developer"," Graphics Designer"," Youtuber"],
    typeSpeed:50,
    BackSpeed:60,
    loop:true

})

//!   Aside Menu

const nav = document.querySelector(".nav"),
    navList = document.querySelectorAll("li"),
    totalNavList = navList.length;
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0;i<totalNavList;i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click",function(){

            removeBackSection();

            for(let j=0;j<totalNavList;j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                    // allSection[j].classList.add("back-section");
                }

                navList[j].querySelector("a").classList.remove("active");
            }   
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200)
                {
                    asideSectionTogglerBtn();
                }
        })
    }

    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }

    function removeBackSection(){
        for(let j=0;j<totalSection;j++)
            {
                allSection[j].classList.remove("back-section");
            } 
    }

    function showSection(element)
    {
        for(let j=0;j<totalSection;j++)
        {
            allSection[j].classList.remove("active");
        }   
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
    }


    function updateNav(element)
    {
        for(let i=0;i<totalNavList;i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if( target == navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }    
    }


    document.querySelector(".hire-me").addEventListener("click",function() {
        const sectionIndex = this.getAttribute("data-section-index");

        showSection(this);
        updateNav(this);

        removeBackSection();
        addBackSection(sectionIndex);
    })

   const navTogglerBtn = document.querySelector(".nav-toggler"),
         aside = document.querySelector(".aside");

         navTogglerBtn.addEventListener("click" , () => {
            asideSectionTogglerBtn();
         })

         function  asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            
            for(let j=0;j<totalSection;j++)
            {
                allSection[j].classList.toggle("open");
            }  
         }