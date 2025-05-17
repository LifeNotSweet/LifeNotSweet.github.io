function compare(a, b)
{
    if(a>b)
        console.log (a + " - максимум, " + b + " - минимум\n");
    else if (a<b)
         console.log (b + " - максимум, " + a + " - минимум\n");
    else
        console.log (a + " и " + b + " - равны\n");
 
}

compare(1,1);
compare(3,5);
compare(9,7);
