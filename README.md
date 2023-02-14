# **Komputer Store**
Build a dynamic webpage using “vanilla” JavaScript. Follow the guidelines given below.
See the website here: https://gapegias.github.io
## **Set up development environment**
Make sure you have installed at least the following tools:
- A text editor of your choice (Visual Studio Code, Here: https://code.visualstudio.com)
- Live Server (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
## **1. The Bank Section**
### **1.1. Balance**

<img src="/pictures/bank_section.PNG">

The bank shows a “Bank” balance in your currency. This is the amount available for you to buy a laptop.
### **1.2. Outstanding Loan (Only visible after taking a loan)**

<img src="/pictures/bank_section_after_a_loan.PNG">

Shows the outstanding Loan value. This should be reduced as loan paid back. 
### **1.3. Get a loan**

<img src="/pictures/bank_section_loan_prompt_window.PNG">

The "Get a loan" button will attempt to get a loan from the bank. When the Get a loan button is clicked, it must show a “Prompt” popup box that allows you to enter an amount.
Constraints on Get a loan button:
1. You cannot get a loan more than double of your bank balance (i.e., If you have 500 you cannot get a loan greater than 1000.)
2. You cannot get more than one bank loan before repaying the last loan
## **2. Work Section **

<img src="/pictures/work_section.PNG">

### **2.1. Pay**
The pay or your current salary amount in your currency. Should show how much money you have earned by “working”. This money is NOT part of your bank balance. 
### **2.2. Bank Button**
The "Bank" button must transfer the money from your Pay/Salary balance to your Bank balance. Remember to reset your pay/salary once you transfer.
Constraints on Bank button:
1. If you have an outstanding loan, 10% of your salary MUST first be deducted and transferred to the outstanding Loan amount
2. The balance after the 10% deduction may be transferred to your bank account
### **2.3. Work button**
The "Work" button must increase your Pay balance at a rate of 100 on each click.
### **2.4. Repay Loan button**

<img src="/pictures/work_section_after_a_loan.PNG">

Once you have a loan, a new button labeled “Repay Loan” should appear. Upon clicking this button, the full value of your current Pay amount should go towards the outstanding loan and NOT your bank account.
Any remaining funds after paying the loan may be transferred to your bank account
## **3. Laptops Selection Area**

<img src="/pictures/laptop_section.PNG">

### **3.1. Laptop selection**

<img src="/pictures/laptop_section_selectBox.PNG">

Use a select box to show the available computers. The feature list of the selected laptop must be displayed here. Changing a laptop should update the user interface with the information for that selected laptop.
### **3.2. Laptop API**
The data for the laptops will be provided to you via a RESTful API that returns JSON data.
The endpoint for the API is: https://hickory-quilled-actress.glitch.me/computers
## **4. Laptop info section**
The Info section is where the image, name, and description as well as the price of the laptop must be displayed.
### **4.1. Images**

<img src="/pictures/laptop_info_area.PNG">

The path to the image of a laptop can be found in the response. Remember to use the base URL WITHOUT the computers path.
Example Link: https://hickory-quilled-actress.glitch.me/assets/images/1.png
### **4.2. Buy Now button**
The "Buy Now" button will attempt to buy a laptop and validate whether the bank balance is sufficient to purchase the selected laptop.
If you do not have enough money in the “Bank”, a message must be shown that you cannot afford the laptop.
<img src="/pictures/laptop_info_area_deny_buy.PNG">
When you have sufficient “Money” in the account, the amount must be deducted from the bank and you must receive a message that you are now the owner of the new laptop!
<img src="/pictures/laptop_info_area_success_buy.PNG">
