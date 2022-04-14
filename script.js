function subjects(){
	var numSubjects=parseInt(prompt("Please, enter the number of subjects you studied?"));
	
	var subjectCounter=1;
	marks=[];
	gradeResults=[];	
	avg=0;
	for(i=0;i<numSubjects;i++){		

        marks[i]= parseInt(prompt("Please, enter the mark for subject "+subjectCounter));

        avg=avg+marks[i];

	   if(marks[i]>=85 && marks[i]<=100){
			gradeLevel="A";
		}
		else if(marks[i]>=70 && marks[i]<84){
			gradeLevel="B";
		}
		else if(marks[i]>=55 && marks[i]<69){
			gradeLevel="C";
		}
		else if(marks[i]>=40 && marks[i]<54){
			gradeLevel="D";
		}
		else if(marks[i]>=25 && marks[i]<39){
			gradeLevel="E";
		}
		else if(marks[i]>=10 && marks[i]<24){
			gradeLevel="F";
		}
		else{
			gradeLevel="NG";
		}

		gradeResults[i]=gradeLevel;
		subjectCounter++;
    }
	avg=avg/numSubjects;
	for(i=0;i<numSubjects;i++){
		document.getElementById("marks").append(marks[i]+",");
		document.getElementById("gradeResults").append(gradeResults[i]+",");		
	}
	document.getElementById("avg").append(avg);
}