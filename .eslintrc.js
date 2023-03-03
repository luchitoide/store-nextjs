module.exports={
	env:{ //Con este objeto vamos a configurar nuestro ecosistema de desarrollo
		browser:true,
		amd: true,
		node: true,
		es6:true
	},
	extends:[ //Configuramos de donde podemos recibir configuraciones
		"eslint:recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended",
		"next",
		"next/core-web-vitals",
	],
	rules:{ //configuramos nuestras reglas
		semi:["error","always"] //indicamos que sea obligatorio el uso del ;
	}
}
