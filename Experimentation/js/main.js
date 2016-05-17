var array = [1,2,3,4,5];
var sum = 0;

for(i in array)
{
  sum += array[i];
}

console.log("The sum is: ", sum);

array.splice(2, 0, 6);

for(i in array)
{
  console.log(array[i]);
}

printList(array);

$(".main-content").
