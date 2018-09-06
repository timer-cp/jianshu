import { injectGlobal } from 'styled-components';

injectGlobal`
    @font-face {
      font-family: "iconfont";
      src: url('./iconfont.eot?t=1536226281565'); /* IE9*/
      src: url('./iconfont.eot?t=1536226281565#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAaQAAsAAAAACZAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8d0k4Y21hcAAAAYAAAABpAAABss6VnaFnbHlmAAAB7AAAApYAAAMs10j1PGhlYWQAAASEAAAALwAAADYSjW3PaGhlYQAABLQAAAAcAAAAJAfeA4ZobXR4AAAE0AAAAA4AAAAUFAAAAGxvY2EAAATgAAAADAAAAAwBCgIYbWF4cAAABOwAAAAfAAAAIAEVAIRuYW1lAAAFDAAAAUUAAAJtPlT+fXBvc3QAAAZUAAAAOgAAAEtSgOs4eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeMT53Y27438AQw9zA0AAUZgTJAQDigAwreJztkDEOgCAMRV8BjSHewtWZmYnTOHloOAYW6uAh/OQ17Q+U5AML4JVTCSA3wtClrkzfE6cfyDpHNhyuSj1qaqV3+PavRO/ZGVtFX+gfsvJrnzW/UxjpGbM/jJF8TYZmRysG/gFE7xeXAAAAeJxNkM9P1EAUx+d12pluWVrTdnezP7qwrdvuqtktbWkFYdEACWogezJ4EWLUGIwHowkBLiR78Q5nThiNJMA/YIIRs0ddTty548GLJlicRUw2mbz5fua9mfedhziEzr/gT3gcqaiIULkBUQ0cGWgRMl4YUS0qM2anjGXgDvJF4A83Ng8xPtycbbn4V+XPydo2xttrq914duP5yFaH5ztbLN4ZEeLf19/xu63WHsZ7rdYuQjzrd44PMEIUKegqqiNUspwStcDXsO1YhGIh9D0DrGGLWKY9HExAYJmUNU/pad8Lx5mJZzPx8fRTUB5PvRAIJ9AlOHYbr29C6U4tWnp0e7S+UDEGc2X36AijuAoTV2xLiz8LhTdf66FbfSAn75fnhUI2VfDK7M+oO4NvPMIuyiIfIQgc9mXbpIQSPe1FDfCKXMrKRIIMZo0b9h3q6xk2D5YLozCwTbxvlpbnmvvNuTHZsBV39e3Kot9cX49Ph1YuZbOnwoH1+ebccsk0S2OyY8iu7y+uTO3snLqev7DKxP/sLcU2mD/C/J3iDawiic1rFE2jJ2iZ+TTrYIcDkKYETMeOCFuOHURhuuv7YruM3sXmdIuAKSCZXsmuQBiwt0yG/8gbgCLohLHQrdQaDBWIwiIQKuBRnm8TWWxTiuPJrKZzRhUbKVUVZZLMapICkFP7FOCyg0lRodornicEHrJs/B5P9oKW6CfQyeXcwt18XKdql6ovr7marmuM458JKnIBp2gS1E4SCi8l4jP4gdvs1bYo4nhWTRm4anC65mlUEZODWQ6UPjUHoEhaNsk8qh95UYR5puIP/EyPXutXKXTy9/JuLhe7VGb0vVJxNS8aYq1JQBJJ4BMSVqSTGkiawgXoLx4yn9kAAHicY2BkYGAA4i23bD7G89t8ZeBmYQCB69tFXiLo/4dZGJhtgVwOBiaQKABYmQuSAHicY2BkYGBu+N/AEMPCAAJAkpEBFbACAEcLAm54nGNhYGBgQcMAAQQAFQAAAAAAAAA4AIIA0gGWeJxjYGRgYGBlqGBgYwABJiDmAkIGhv9gPgMAFRMBmgB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICVkYmRmZGFkZWRjYGtODWxKDmDyTGRvbggMy8vtYgzMzk/T7cktbiEgQEAoTwJ8AAA') format('woff'),
      url('./iconfont.ttf?t=1536226281565') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url('./iconfont.svg?t=1536226281565#iconfont') format('svg'); /* iOS 4.1- */
    }
    
    .iconfont {
      font-family:"iconfont" !important;
      font-size:16px;
      font-style:normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`;
