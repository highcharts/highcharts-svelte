<script lang="ts">
    import HighchartsSvelte from '../component/HighchartsSvelte.svelte';
</script>

<div id="demo">
    <HighchartsSvelte options={{
        title: {
            text: 'My chart'
        },
        series: [{
            type: 'line',
            data: [1, 2, 3]
        }]
    }} />
</div>

<style>
</style>