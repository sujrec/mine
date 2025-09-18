<template>
    <div>
        <header><slot name="header"></slot></header>
        <main><slot></slot></main> <!--Default slot -->
        <footer><slot name="footer">Default Footer </slot></footer>
    </div>
</template>