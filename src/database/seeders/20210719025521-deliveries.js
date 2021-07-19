"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("deliveries", [
      {
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab commodi similique ipsum optio nobis rerum voluptas vero enim, hic vitae. Minima deserunt qui corrupti atque reprehenderit dolorum veritatis consequuntur praesentium.",
        status: 2,
        value: "10.99",
        customer_id: 1,
        deliveryman_id: 1,
      },
      {
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab commodi similique ipsum optio nobis rerum voluptas vero enim, hic vitae. Minima deserunt qui corrupti atque reprehenderit dolorum veritatis consequuntur praesentium.",
        status: 2,
        value: "10.99",
        customer_id: 2,
        deliveryman_id: 2,
      },
      {
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab commodi similique ipsum optio nobis rerum voluptas vero enim, hic vitae. Minima deserunt qui corrupti atque reprehenderit dolorum veritatis consequuntur praesentium.",
        status: 2,
        value: "10.99",
        customer_id: 3,
        deliveryman_id: 3,
      },
      {
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab commodi similique ipsum optio nobis rerum voluptas vero enim, hic vitae. Minima deserunt qui corrupti atque reprehenderit dolorum veritatis consequuntur praesentium.",
        status: 2,
        value: "10.99",
        customer_id: 4,
        deliveryman_id: 4,
      },
      {
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab commodi similique ipsum optio nobis rerum voluptas vero enim, hic vitae. Minima deserunt qui corrupti atque reprehenderit dolorum veritatis consequuntur praesentium.",
        status: 2,
        value: "10.99",
        customer_id: 5,
        deliveryman_id: 5,
      },
      {
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab commodi similique ipsum optio nobis rerum voluptas vero enim, hic vitae. Minima deserunt qui corrupti atque reprehenderit dolorum veritatis consequuntur praesentium.",
        status: 1,
        value: "10.99",
        customer_id: 1,
        deliveryman_id: 6,
      },
      {
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab commodi similique ipsum optio nobis rerum voluptas vero enim, hic vitae. Minima deserunt qui corrupti atque reprehenderit dolorum veritatis consequuntur praesentium.",
        status: 1,
        value: "10.99",
        customer_id: 2,
        deliveryman_id: 7,
      },
      {
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab commodi similique ipsum optio nobis rerum voluptas vero enim, hic vitae. Minima deserunt qui corrupti atque reprehenderit dolorum veritatis consequuntur praesentium.",
        status: 1,
        value: "10.99",
        customer_id: 3,
        deliveryman_id: 8,
      },
      {
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab commodi similique ipsum optio nobis rerum voluptas vero enim, hic vitae. Minima deserunt qui corrupti atque reprehenderit dolorum veritatis consequuntur praesentium.",
        status: 1,
        value: "10.99",
        customer_id: 4,
        deliveryman_id: 9,
      },
      {
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab commodi similique ipsum optio nobis rerum voluptas vero enim, hic vitae. Minima deserunt qui corrupti atque reprehenderit dolorum veritatis consequuntur praesentium.",
        status: 1,
        value: "10.99",
        customer_id: 5,
        deliveryman_id: 10,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("deliveries", null, {});
  },
};
