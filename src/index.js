module.exports=function getZerosCount(number) {

	function count_degree(divisor)
	{
	var max_degree=0;
	while (Math.pow(divisor,max_degree)<=number) {
		max_degree++;
	}
	max_degree--;
    count_numbers=0;
    count_degrees=0;
    for(var i=max_degree;i>0;i--)
    {
    	count_degrees+=i*(Math.floor(number/Math.pow(divisor,i))-count_numbers);
    	count_numbers=Math.floor(number/Math.pow(divisor,i));
    }
    return count_degrees;
    }
    return Math.min(count_degree(2),count_degree(5));
}


