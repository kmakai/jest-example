function capitalize(str){
   str = str.toLowerCase();
   str = str[0].toUpperCase() + str.slice(1);
   return str;
};

module.exports = capitalize;