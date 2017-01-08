const counter = (state = 0, action) => {
   switch (action.type) {
     case 'plus':
       return state + 1;
     case 'moins':
       return state - 1;
     default:
       return state;
   }
 }

 export default counter
