# Project-Heartbeat

What was our motivation? <br>
According to the CDC, heart disease is one of the leading causes of death for people of most races in the US (African Americans, American Indians and Alaska Natives, and white people). About half of all Americans (47%) have at least 1 of 3 key risk factors for heart disease: high blood pressure, high cholesterol, and smoking. Other key indicator include diabetic status, obesity (high BMI), not getting enough physical activity or drinking too much alcohol. Detecting and preventing the factors that have the greatest impact on heart disease is very important in healthcare. Our goal was to detect "patterns" from the data that can predict a patient's condition.

Why we build this project? <br>
Our goal was to detect "patterns" from the data that can predict a patient's condition. Originally, the dataset come from the CDC and is a major part of the Behavioral Risk Factor Surveillance System (BRFSS), which conducts annual telephone surveys to gather data on the health status of U.S. residents. As the CDC describes: "Established in 1984 with 15 states, BRFSS now collects data in all 50 states as well as the District of Columbia and three U.S. territories. BRFSS completes more than 400,000 adult interviews each year, making it the largest continuously conducted health survey system in the world.". The most recent dataset (as of February 15, 2022) includes data from 2020. It consists of 401,958 rows and 279 columns. The vast majority of columns are questions asked to respondents about their health status, such as "Do you have serious difficulty walking or climbing stairs?" or "Have you smoked at least 100 cigarettes in your entire life? [Note: 5 packs = 100 cigarettes]". In this dataset, we noticed many different factors (questions) that directly or indirectly influence heart disease, so we decided to select the most relevant variables from it and do some cleaning so that it would be more presenatable and understandable from patients’ perspective.

What problem does it solve? <br>
It will give insight on how underlying health conditions, lifestyles, age factors affect the heart disease. As part of this project, we have many indicators to choose from and their correlation to decide how it impacts heart disease.<br>
1.HeartDisease	2. BMI	3. Smoking	4. AlcoholDrinking	5.Stroke	6. PhysicalHealth 7. MentalHealth	8. DiffWalking	9.Sex	10.AgeCategory         11.	Race 12.Diabetic 
13.PhysicalActivity	14.GenHealth	15.SleepTime	16.Asthma 17.KidneyDisease	18.SkinCancer

What did we learn?<br>
1. As the count of underlying diseases increases, chances of getting heart disease increases proportionally.<br>
2. Male gender has slightly higher chances of getting heart disease compared to female gender.<br>
3. From 319K records of data, only 8.56% people are with heart disease while 91.4% do not have heart disease.<br>
4. As the age increases chances of getting heart disease gets higher from age range of 40 - 80. <br>
5. When compared with underlying diseases such as Diabetes, Skin cancer, Asthma, Kidney disease, Male gender has higher chances of getting heart disease compared to female gender.<br>

What makes our project stand out?
1. Large set of data (319K records) from CDC Survey.
2. 16 indicators( based on lifestyle, underlying diseases, age, gender etc).
3. Interactive dropdown to decide the difference on how heart disease chances varies from Male to Female.
4. Applications and Tools used to get desired results - Python, JavaScript, HTML, Mongodb, CSS 
5. extract transform, and load  strategy is used to get more desired results on webpage.

What issues we faced ? <br>
Came across couple of issues - 1. As the data size being large, web browser was limiting to render the data and display in web page. We understood the problem and limited and parsed our data thru MongoDB and limited the records to have more refined display.
Index.html has multiple issued which was limiting the data to be displayed in correct position on Webpage. So had to recreate the basic html and css file and then merged with .js, app.py file.

Files for reference : <br>
App.py – The Flask file that pulls in the heart disease data from the mongo database. Algorithms are applied to the data to feed the plots in the index.HTML. <br>
HeartDisease_Calc_Combined.ipynb – Jupyter notebook that combines all code required to create the MongoDB database and collections required for the charts. <br>
Main.js – Java script file that <br>
Index.html – Homepage HTML file <br>
Gender.html – HTML file for the gender tab <br>
Conditions.html – HTML code for the conditions tab <br>
Heart_2020_cleaned.csv – Data file downloaded from Kaggle <br>
Static Folder: Contains all of the Java Script files and CSS files required to run the html sites. <br>

Scratch work: Files that were generated during the project but are no longer in use <br>
Heart_Data_Import.ipynb <br>
VP_HeartDisease_Calculations.ipynb <br>
HeartDisease_Calculations.ipynb <br>

Collaborators List :<br>
Dipti - <br>
Huntly - <br>
Victor - <br>
Sarah - <br>

Tools and Applications used :<br>
Python <br>
JavaScript <br>
HTML <br>
Mongodb <br>
CSS <br>
Extra Library -  Billboard.js, Billboar

Links : <br>
dataset - <br>
https://www.kaggle.com/datasets/kamilpytlak/personal-key-indicators-of-heart-disease <br>
Github - <br> 
https://github.com/ <br>
Mongodb - <br>
https://www.mongodb.com/try/download/community <br>

<b>BillboardJS:</b><br>
Billboard.js/billboard.css - billboard.js is a re-usable, easy interface JavaScript chart library, based on D3.js. The name "billboard" comes from the famous billboard chart which everybody knows. As you know, billboard.js is a forked project from the original popular chart library C3.js. In the early beginning, we used C3.js library and liked its easy interface and functionality. https://naver.github.io/billboard.js/release/latest/doc/
d3js.orgd3js.org <br>
D3.js - Data-Driven Documents <br>
D3 is a JavaScript library for visualizing data with HTML, SVG, and CSS. (296 kB) <br>
https://d3js.org/ <br>

<b>GitHubGitHub</b><br>
c3js/c3: A D3-based reusable chart library <br>
:bar_chart: A D3-based reusable chart library. Contribute to c3js/c3 development by creating an account on GitHub. (49 kB) <br>
https://github.com/c3js/c3 <br>
naver.github.io <br>
Home - billboard.js API doc <br>
Re-usable, easy interface JavaScript chart library based on D3 v4+ <br>


Code Snippet : <br>



Charts Snippet : <br>
![image](https://user-images.githubusercontent.com/112952607/213028543-db2db326-f1d0-4e55-ae25-0e44fe4e058b.png)
![image](https://user-images.githubusercontent.com/112952607/213028683-b7eb6ff9-db04-4a0e-bd00-0890b13505d7.png)
![image](https://user-images.githubusercontent.com/112952607/213028755-d6968228-0b47-4bb8-884a-8b6a08efc8b2.png)
![image](https://user-images.githubusercontent.com/112952607/213028833-71b76a83-196f-4317-8e4d-a8495f378901.png)
![image](https://user-images.githubusercontent.com/112952607/213028985-5a079e31-29eb-4ea3-b60b-3d23c19c398b.png)
![image](https://user-images.githubusercontent.com/112952607/213029064-f5162556-dafb-47ee-8d4f-122cfecbb7ce.png)

