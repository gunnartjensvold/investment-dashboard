<template>
    <div>

    </div>
</template>

<script setup lang="ts">
var yahooFinance = require('yahoo-finance');

yahooFinance.historical({
    symbol: 'AAPL',
  from: '2012-01-01',
  to: '2012-12-31',
}, function (err: any, quotes: any) {
    console.log(err,quotes)

});

</script>




