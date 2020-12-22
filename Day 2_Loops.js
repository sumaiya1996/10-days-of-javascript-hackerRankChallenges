function vowelsAndConsonants(s) {
    
    const vowel = "aeiou";
   
    for(let i=0;i<s.length;i++){
    if (vowel.indexOf(s.charAt(i)) > -1)
{
  console.log(s.charAt(i));
}}
for(let i=0;i<s.length;i++){
    if(vowel.indexOf(s.charAt(i))<0){
        
        console.log(s.charAt(i));
    }
    }
}