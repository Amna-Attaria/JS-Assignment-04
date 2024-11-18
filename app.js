// Question :01 
var multiArray = [[]]

// Question :01   
document.write("<h2>MultiArray</h2>")
var multiarray = [[1,2,3] , [4,5,6] , [7,8,9]];
for(var i=0; i<multiarray.length;i++)
{
    for (var j=0 ; j<multiarray.length;j++)
    {
        document.write(multiarray[i][j])
    }
    document.write("<br>")
}
// Question :03
document.write("<h2>Counting</h2>")
for (var i = 1; i<=10 ; i++)
{
    document.write(i + "<br>")
}
// Question :04
document.write("<h2>Table</h2>")
var table = +prompt("Enter the num"); 
var startnum = +prompt("Enter the startnum");
var endnum = +prompt("Enter the endnum");
for(var i=startnum;i<=endnum ; i++)
{
    document.write(table + "x" + i + "=" + table*i + "<br>");
}
// Question :05
var fruit = ["apple", "banana", "orange","strawberry"]
for (i=0;i<fruit.length;i++)
    {
        document.write(fruit[i]+"<br>")
    }
    // Question :06
    document.write("<h2>Counting:</h2>")
    for (var i = 1; i<=15 ; i++)
    {
        document.write(i + ",")
    }
    document.write("<br>")
    document.write("<h2>ReverseCounting:</h2>")
    for (var j = 10; j>=1 ; j--)
    {
        document.write(j + ",");
    }
    document.write("<br>")
    document.write("<h2>Even:</h2>")
    for (var k = 2; k<=20; k+=2 )
   {
     document.write(k + ",")
   } 
   document.write("<br>")
   document.write("<h2>Odd:</h2>")
   for(var l =1 ; l<10 ; l++ )
   {
     if(l % 2!==0)
     {
        document.write(l + ",")
     }
   }
   document.write("<br>")
   document.write("<h2>Series:</h2>")
   for (var k = 2; k<=20; k+=2 )
    {
      document.write(k +"k"+"," )
    } 
    // Question :07
    var menue = ["cake", "apple pie", "cookie", "chips", "patties"]
    var whatyouwant = prompt("Wellcome to our Bakery what do you want to Orderd")
    var matchFound =false;
    for (var i=0 ;i<menue.length ;i++ )
        {
           if(menue[i]===whatyouwant)
            {
                matchFound=true
                alert("Yes its Available");
                 break;
        }
        }
        if(matchFound==false)
            {
                alert("Its not Available");
            }
            // Question :08
            var num =[24, 53, 78, 91, 12]
            var lagenum =[91]
            document.write( "<br>"+"<br>" + "Array item is..")
            for(var i=0;i<num.length;i++)
                {
                    document.write(num[i] + ",")
                }
                 document.write("<br>" + "The large num is" + lagenum + "<br>" )
                 // Question :09
                 var num =[24, 53, 78, 91, 12]
                 var smallnum =[22]
                 document.write( "<br>" + "Array item is..")
                 for(var i=0;i<num.length;i++)
                     {
                         document.write(num[i] + ",")
                     }
                      document.write("<br>" + "The large num is" + smallnum + "<br>" + "<br>");
                      // Question :10
                      for(var i=5; i<=100; i+=5)
                        {
                            document.write(i+ ",")
                        }