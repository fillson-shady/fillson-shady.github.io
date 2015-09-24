$(function() {
    
    function getRate(base) = {
        $.ajax({
            url: "http://api.fixer.io/latest?base=" + base,
            success: function(data) {
                $("#" + base).html(data.rates.RUB);
            }
        }
    )};
    
    getRate("USD");
    getRate("EUR");
    
});
