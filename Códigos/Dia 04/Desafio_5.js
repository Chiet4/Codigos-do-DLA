console.log("Cancela de estacionamento")

let estado = 'Aberta'

switch(estado){
    case "Aberta":
        console.log(estado + ', pode passar!')
        break
    case "Fechada":
        console.log(estado + ', não pode passar!')
        break
    case "Manutenção":
        console.log(estado + ', não pode passar, está inuperante.')
        break
    default:
        console.log('Estado inválido.')
}

