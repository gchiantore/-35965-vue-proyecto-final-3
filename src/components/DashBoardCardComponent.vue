<template>
    <div>
        <div class="card" style="width: 18rem;">
            <div class="card-header ">
            <i :class="icono" class="header-icon"></i> 
            </div>
            <div class="card-body">
                <h5 class="card-title text-secondary">{{nombre}}</h5>
                <h1 class="indi-text text-success">{{cantidad}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'DashboardCardComponent',
        props:{
            nombre:String,
            cantidad:Number,
            icono:String,
        },
}
</script>

<style>
    .card-header{
        display: flex;
        justify-content: center;
    }
    .card-title{
        text-align: center;
    }
    .header-icon{
        font-size: 106px;
        text-align: center;
        color:darkgrey;
    }
    .indi-text{
        font-size: 72px;
        text-align: center;
    }
</style>