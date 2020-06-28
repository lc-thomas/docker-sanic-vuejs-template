<template>
  <header>
    <div id='nav_container'>
      <nav>
        <router-link to='/'>
          <span id='logo'>Logo</span>
        </router-link>
        <ul id='menu'>
          <router-link to='anotherPage'>
            <li>AnotherPage</li>
          </router-link>
          <li>Menu 2</li>
          <li>Menu 3</li>
        </ul>
        <ul id='actions'>
          <li>login / register</li>
          <li>options</li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<style scoped>
header{
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  border-top: 3px solid #f48054;
  background-color: #393939;
  color: white;
  box-shadow: 0px 2px 3px #1c1c1c;
}
#nav_container{
  max-width: 90%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
nav{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul{
  display: inline-block;
}

li{
  display: inline-block;
  list-style: none;
  margin-left: 10px;
  margin-right: 10px;
}
  
</style>