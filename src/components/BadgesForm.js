import React from 'react' ;

class BadgesForm extends  React.Component {
	
	state = {
		fisrtName: "fronted enginner"
	};


	//el handleChange es un atributo del input que lo usamos como funcion para poder usar los datos a nuestro conveniencia
	handleChange = e => {
		
			// console.log({value: e.target.value});

			//el setState ayuda a guardar los datos en memoria, pero solamente los guarda
			this.setState({
			//con esto podemos ver la informacion de cada uno de los inputs de nuestro form, pero se iran remplaznado segun vayamos llenandolos
				// firstName: e.target.value,
				// lastName: e.target.value,
				// email: e.target.value,

				//con este metodo, podremos llenar los inputs sin que se reemplaze los datos de los inputs ya que generan un valor independiente
				[e.target.name] : e.target.value,

			})
		
	}
	//handleChange = e => {
	// 	this.setState ({
	// 		[e.target.name]: e.target.value,

	// 	})
	// };
		handleSubmit = e => {
			e.preventDefault();
			console.log('form was submited');
			console.log(this.state)
		}
    render() {
			return (
				<div>
					<form onSubmit={this.handleSubmit}>
							<div>
								<label>First Name</label> <br />
								<input 
								onChange={this.handleChange}
								type="text" 
								name="fisrtName"
								//le pasamos un props adicion VALUE, es el que va tener y va desplegar cada uno de los inputs, lo que debemos hacer es leer la informacion desde el estado

								//para leer informacion dle estado se usa el "state", pero para escribirlo usamos "setState"
								value={this.state.fisrtName}

								/>
								</div>
							<div>
								<label>Last Name</label><br />
								<input 
								onChange={this.handleChange}
								type="text" 
								name="lastName"
								value={this.state.lastName}
								/>
							</div>
							<div>
								<label>Email</label><br />
								<input 
								onChange={this.handleChange}
								type="email" 
								name="email"
								value={this.state.email}
								/>
							</div>
						<button onclick={this.handleSubmit} className="btn btn-primary">Save
						</button>
						</form>
				</div>
			)
		}
}
export default BadgesForm;