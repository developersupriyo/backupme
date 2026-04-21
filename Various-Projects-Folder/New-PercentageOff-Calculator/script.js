        
        const amt = document.getElementById("amount");
        const ans = document.getElementById("answer");
        const btn = document.getElementById("calc");
        // code is Developed by Smalakar
        const addBtn = document.getElementById("add");
        const addBox = document.getElementById("right");
        const percent = document.getElementById("percentage");
        const addAns1 = document.getElementById("addAns1");
        const addAns2 = document.getElementById("addAns2");
        const addAns3 = document.getElementById("addAns3");
        const addAns4 = document.getElementById("addAns4");
        const iconChange = document.querySelector(".icon");
        // code is Developed by Smalakar
        
        function percentCal (){
            const amtvalue = amt.value ;
            const percentvalue = percent.value ;
            let x = amtvalue * percentvalue / 100 ;
            let final = amtvalue - x ;
            ans.value = final;
            iconChange.innerHTML = "₹";
        }
        // code is Developed by Smalakar
        function add(){
            ans.value = Number(addAns1.value) + Number(addAns2.value) +
            Number(addAns3.value) + Number(addAns4.value);
            iconChange.innerHTML = "Total ₹";
            
        }
        // code is Developed by Smalakar
        function eachAdd1(){
            addAns1.value=ans.value;
        }
        function eachAdd2(){
            addAns2.value=ans.value;
        }
        function eachAdd3(){
            addAns3.value=ans.value;
        }
        // code is Developed by Smalakar
        function eachAdd4(){
            addAns4.value=ans.value;
        }
        addBtn.addEventListener("click", add);
        btn.addEventListener("click", percentCal);
        // code is Developed by Smalakar
