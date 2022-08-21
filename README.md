# MedicalCenter

# What the program is intended to do?
This project is used by medical centers and patients to streamline their service appointments. By using the system, potential patients can know and choose their preferred appointment times according to the doctor’s available time slots. 

# Goals of the project. 
Recently, increasing number of Medical Centers has been an obvious trend in many countries. This is mainly because the needs to providing medical services to increasing patients due tovarious   forms   of   diseases.   Such   scenario   needs   careful   attentions   from   the Medical Center Online Registration management system in order to provide appropriate services to patients. One of the important tasks to ensure efficient health care services is booking for medical appointment.Another important task is to Introduce doctors and history of Medical Center since its creation․ With increasing number of patients, a  systematic   appointment  booking   is  crucial in order to provide anaccurate and fast medical treatment to patients. Conventional way of booking appointmentis  time  consuming  since  it  requires  patients  to  go  to  the  hospital,  in  which  eventually resulting in an increase in cost and effort. To overcome such problem, the appointment booking system can be made   online via the Internet, more specifically via the website of that Medical Center.  With an internet-based  booking system, appointment booking can be done from anywhere and at any time without having to go to hospital, therefore is time- and cost-effective. 

# How well it works, which features do not work properly or could be improved.
Book appointment feature is still incomplete and imperfect.

# An appendix containing a listing of the program, correctly formatted and with comments that explain what it is doing.  
![websiteDesign](https://user-images.githubusercontent.com/86877899/182404856-4bb23d4d-7bb8-4653-8340-788433b90cf7.jpg)
# Code organisation 📂

![t1](https://user-images.githubusercontent.com/86877899/182565508-67de4290-e5d8-49ff-b659-4dcacb58a201.jpg)
![t2](https://user-images.githubusercontent.com/86877899/182565562-a0d8620a-57cc-46b8-93e7-b63878c6d714.jpg)
![t3](https://user-images.githubusercontent.com/86877899/182565606-9b67095d-d557-49cd-82ae-7ee4224fbac9.jpg)


# How to run the project?

1. Download the repository-> git clone https://github.com/monika4445/MedicalCenter.git
2. Open the Terminal (Linux & MacOS) or PowerShell (Windows) and change directory to the project folder.
3. Type ‘npm install’ in the Terminal (PowerShell) and press Enter. All the dependencies would be installed.
4. Go back to the Terminal (PowerShell) and be sure that you are pointing inside the project folder (by typing pwd command). To open the application, type ‘npm run dev’ and press Enter.
5. The application should be live on the local port 4000.
6. Type http://localhost:4000/ into a browser.
7. Now you should be inside the application
8. To login type http://localhost:4000/auth/login, to register type http://localhost:4000/auth/register, to see all doctors type http://localhost:4000/app/doctors, to book appointment type http://localhost:4000/app/book or you can use API that is provided for that. When the doctor registers or logs in immediately is being redirected to http://localhost:4000/app/patients page, where are all registered patients.

