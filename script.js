const endDate = "15 April 2023 5:00 PM";
        document.getElementById("end-date").innetText = endDate;
        const inputs = document.querySelectorAll("input");
        function clock(){
            const end = new Date(endDate);
            const now = new Date();
           const diff = (end-now)/1000;
           inputs[0].value = Math.floor(diff/3600/24);
           inputs[1].value = Math.floor((diff/3600)%24);
           inputs[2].value = Math.floor(diff / 60) % 60;
           inputs[3].value = Math.floor(diff) % 60;
           //convert in to days
        }
        clock();
        setInterval(clock,1000)
        /* 1 day = 24 hr
         * 1 hr = 60 mins
         * 60 mins = 3600sec
         */