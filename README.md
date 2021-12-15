# Advertyzement Assignment

This project was bootstraped with Create React App.

## Implemention 

In this project I have created React Components which are present in the components folder. 

For displaying the loader when fetching the API . The spinner.gif is used which is present in the images folder.

The public folder contains the main HTML page and src folder contains the index.js and App.jsx which is rendered by the main HTML page .

The main nav bar is present in the Nav React Component and the Body Component contains the cards which will be fetched from the API. 

When the button is clicked in the Nav bar a prop will be sent from child component (Nav.jsx) to parent component(App.jsx).
When this prop is initialized as true then the Body component will be displayed else " Please click Get Users to find the details of the Users. " will be displayed .

Then if the button is clicked the data will be fetched through API using useEffect hook in react and a Spinner component is added to the data fetched using 
conditional rendering in react .

Page number is sent into the dependency array of the useeffect hook .

Using map function all the data in the array will be iterarted and gets printed in the form of cards.

Next and Previous buttons are used to change the page number . As in the given API there is data only upto 2 pages so if an user goaes to a page greater than 2 then 
" No User Data to display. " will be displayed if the page number is less than 2 then the user details will be displayed in the form