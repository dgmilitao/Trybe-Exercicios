const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery.deliveryPerson}, Entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº ${order.address.number}, AP: ${order.address.apartment}.`);
};

customerInfo(order);

const orderModifier = (order) => {
  const newDeliveryPerson = order.order.delivery.deliveryPerson = 'Luiz Silva'
  const newPaymentTotal = order.payment.total = 50;
  const pizzaFlavor = Object.keys(order.order.pizza);

  console.log(pizzaFlavor);
  console.log(`Olá ${newDeliveryPerson}, o total do pedido de ${pizzaFlavor[0]}, ${pizzaFlavor[1]} e ${order.order.drinks.coke.type} é R$ ${newPaymentTotal},00.`);
};

orderModifier(order);
