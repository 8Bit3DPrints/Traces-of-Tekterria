class Crafting {
    constructor() {
      this.name = 'Crafting';
      this.materials = [
        { name: 'Nitrous Oxide Tanks', quantity: 0 },
        { name: 'Performance Exhausts', quantity: 0 },
        { name: 'Racing Tires', quantity: 0 },
        { name: 'High-Performance Engines', quantity: 0 },
        { name: 'Limited Slip Differentials', quantity: 0 },
        { name: 'Advanced Suspension', quantity: 0 },
        { name: 'Ceramic Brake Pads', quantity: 0 },
        { name: 'Lightweight Materials', quantity: 0 },
        { name: 'Advanced Gearboxes', quantity: 0 },
        { name: 'High-Torque Axles', quantity: 0 },
        { name: 'Performance Steering', quantity: 0 },
        { name: 'Advanced Car Alarms', quantity: 0 },
        { name: 'GPS Devices', quantity: 0 },
        { name: 'Experimental Weapons', quantity: 0 },
        { name: 'Advanced Vehicle Armor', quantity: 0 },
        { name: 'High-Energy Fuel Cells', quantity: 0 },
        { name: 'Prototype Engines', quantity: 0 },
        { name: 'Advanced Turbochargers', quantity: 0 },
        { name: 'High-Performance Transmissions', quantity: 0 },
        { name: 'Lightweight Chassis', quantity: 0 },
        { name: 'Advanced Suspension Systems', quantity: 0 },
        { name: 'High-Tech Braking Systems', quantity: 0 },
        { name: 'Advanced Steering Systems', quantity: 0 },
        { name: 'High-Speed Gears', quantity: 0 },
        { name: 'Advanced Limited Slip Differentials', quantity: 0 },
        { name: 'High-Performance Tires', quantity: 0 },
        { name: 'Advanced Car Computers', quantity: 0 },
        { name: 'High-Tech Security Systems', quantity: 0 },
        { name: 'Advanced GPS Devices', quantity: 0 },
        { name: 'Military-Grade Weapons', quantity: 0 },
        { name: 'High-Tech Engine Management', quantity: 0 },
        { name: 'Advanced Vehicle Electronics', quantity: 0 },
        { name: 'Futuristic Materials', quantity: 0 },
        { name: 'Secret Weapon Blueprints', quantity: 0 },
        { name: 'Hidden Toolkits', quantity: 0 },
        { name: 'Underground Vehicle Parts', quantity: 0 },
        { name: 'Smuggled Weapons', quantity: 0 },
        { name: 'Black Market Materials', quantity: 0 },
        { name: 'Illegal Engine Modifications', quantity: 0 },
        { name: 'High-Tech Gadgets', quantity: 0 },
        { name: 'Experimental Technology', quantity: 0 },
        { name: 'Rare Vehicle Upgrades', quantity: 0 },
        { name: 'Secret Medical Supplies', quantity: 0 },
        { name: 'Hidden Vehicle Armor', quantity: 0 },
        { name: 'Underground Fuel Sources', quantity: 0 },
        { name: 'Illegal Weapon Modifications', quantity: 0 },
        { name: 'Secret GPS Devices', quantity: 0 },
        { name: 'Hidden Car Alarms', quantity: 0 },
        { name: 'Underground Engine Parts', quantity: 0 },
        { name: 'Secret Vehicle Electronics', quantity: 0 },
        { name: 'Hidden Turbochargers', quantity: 0 },
        { name: 'Secret Superchargers', quantity: 0 },
        { name: 'Illegal Nitrous Oxide Tanks', quantity: 0 },
        { name: 'Legendary Weapons', quantity: 0 },
        { name: 'Mythical Vehicle Parts', quantity: 0 },
        { name: 'Ancient Technology', quantity: 0 },
        { name: 'Lost Weapon Blueprints', quantity: 0 },
        { name: 'Forgotten Toolkits', quantity: 0 },
        { name: 'Abandoned Vehicle Armor', quantity: 0 },
        { name: 'Hidden Fuel Sources', quantity: 0 },
        { name: 'Secret Engine Modifications', quantity: 0 },
        { name: 'Legendary Car Alarms', quantity: 0 },
        { name: 'Mythical GPS Devices', quantity: 0 },
        { name: 'Ancient Vehicle Electronics', quantity: 0 },
        { name: 'Lost Turbochargers', quantity: 0 },
        { name: 'Forgotten Superchargers', quantity: 0 },
        { name: 'Abandoned Nitrous Oxide Tanks', quantity: 0 },
        { name: 'Legendary Steering Wheels', quantity: 0 },
        { name: 'Mythical Gearboxes', quantity: 0 },
        { name: 'Ancient Suspension Systems', quantity: 0 },
        { name: 'Lost Braking Systems', quantity: 0 },
        { name: 'Forgotten Advanced Technology', quantity: 0 },
        { name: 'Legendary Materials', quantity: 0 },
        { name: 'Ammo Casings', quantity: 0 },
        { name: 'Fuel Cans', quantity: 0 },
        { name: 'Water Bottles', quantity: 0 },
        { name: 'Food Rations', quantity: 0 },
        { name: 'Junkyard Parts', quantity: 0 },
        { name: 'Old Tires', quantity: 0 },
        { name: 'Broken Glass', quantity: 0 },
        { name: 'Rusty Nails', quantity: 0 },
        { name: 'Barbed Wire', quantity: 0 },
        { name: 'Used Oil', quantity: 0 },
        { name: 'Car Batteries', quantity: 0 },
        { name: 'Spark Plugs', quantity: 0 },
        { name: 'Air Filters', quantity: 0 },
        { name: 'Radiator Parts', quantity: 0 },
        { name: 'Exhaust Pipes', quantity: 0 },
        { name: 'Gearbox Components', quantity: 0 },
        { name: 'Brake Pads', quantity: 0 },
        { name: 'Steering Wheels', quantity: 0 },
        { name: 'Headlights', quantity: 0 },
        { name: 'Gunpowder', quantity: 0 },
        { name: 'Weapon Blueprints', quantity: 0 },
        { name: 'Medical Supplies', quantity: 0 },
        { name: 'Toolkits', quantity: 0 },
        { name: 'Vehicle Manuals', quantity: 0 },
        { name: 'Engine Parts', quantity: 0 },
        { name: 'Transmission Components', quantity: 0 },
        { name: 'Suspension Springs', quantity: 0 },
        { name: 'Brake Rotors', quantity: 0 },
        { name: 'Fuel Injectors', quantity: 0 },
        { name: 'Spark Plug Wires', quantity: 0 },
        { name: 'Air Conditioning Units', quantity: 0 },
        { name: 'Radiator Fans', quantity: 0 },
        { name: 'Oil Pumps', quantity: 0 },
        { name: 'Water Pumps', quantity: 0 },
        { name: 'Gearbox Housing', quantity: 0 },
        { name: 'Axle Shafts', quantity: 0 },
        { name: 'Steering Columns', quantity: 0 },
        { name: 'Seat Belts', quantity: 0 },
        { name: 'Car Alarms', quantity: 0 }
      ];
      this.recipes = [
        {
          name: 'Simple Shelter',
          materials: [
            { name: 'Fabric', quantity: 5 },
            { name: 'Scrap Metal', quantity: 3 },
            { name: 'Tools', quantity: 2 },
          ],
          result: 'Shelter',
          skillLevel: 1,
          craftingTime: 10,
        },
        {
          name: 'Water Filter',
          materials: [
            { name: 'Wires', quantity: 2 },
            { name: 'Circuit Boards', quantity: 1 },
            { name: 'Batteries', quantity: 1 },
          ],
          result: 'Water Filter',
          skillLevel: 2,
          craftingTime: 15,
        },
        {
          name: 'Solar Panel',
          materials: [
            { name: 'Metals', quantity: 4 },
            { name: 'Wires', quantity: 3 },
            { name: 'Circuit Boards', quantity: 2 },
          ],
          result: 'Solar Panel',
          skillLevel: 3,
          craftingTime: 20,
        },
        {
          name: 'First Aid Kit',
          materials: [
            { name: 'Fabric', quantity: 3 },
            { name: 'Chemicals', quantity: 2 },
            { name: 'Tools', quantity: 1 },
          ],
          result: 'First Aid Kit',
          skillLevel: 2,
          craftingTime: 12,
        },
        {
          name: 'Glass Bottle',
          materials: [
            { name: 'Glass', quantity: 2 },
            { name: 'Tools', quantity: 1 },
          ],
          result: 'Glass Bottle',
          skillLevel: 1,
          craftingTime: 8,
        },
        {
          name: 'Ceramic Bowl',
          materials: [
            { name: 'Ceramics', quantity: 2 },
            { name: 'Tools', quantity: 1 },
          ],
          result: 'Ceramic Bowl',
          skillLevel: 1,
          craftingTime: 8,
        },
        {
            name: 'Steel Sword',
            materials: [
              { name: 'Metals', quantity: 5 },
              { name: 'Tools', quantity: 3 },
            ],
            result: 'Steel Sword',
            skillLevel: 4,
            craftingTime: 25,
          },
          {
            name: 'Leather Armor',
            materials: [
              { name: 'Fabric', quantity: 4 },
              { name: 'Tools', quantity: 2 },
            ],
            result: 'Leather Armor',
            skillLevel: 3,
            craftingTime: 18,
          },
          {
            name: 'Wooden Shield',
            materials: [
              { name: 'Wood', quantity: 3 },
              { name: 'Tools', quantity: 2 },
            ],
            result: 'Wooden Shield',
            skillLevel: 2,
            craftingTime: 12,
          },
          {
            name: 'Stone Axe',
            materials: [
              { name: 'Stone', quantity: 4 },
              { name: 'Tools', quantity: 2 },
            ],
            result: 'Stone Axe',
            skillLevel: 3,
            craftingTime: 18,
          },
          {
            name: 'Copper Wire',
            materials: [
              { name: 'Copper', quantity: 3 },
              { name: 'Tools', quantity: 1 },
            ],
            result: 'Copper Wire',
            skillLevel: 2,
            craftingTime: 10,
          },
          {
            name: 'Golden Amulet',
            materials: [
              { name: 'Gold', quantity: 5 },
              { name: 'Tools', quantity: 3 },
            ],
            result: 'Golden Amulet',
            skillLevel: 5,
            craftingTime: 30,
          },
          {
            name: 'Silver Ring',
            materials: [
              { name: 'Silver', quantity: 4 },
              { name: 'Tools', quantity: 2 },
            ],
            result: 'Silver Ring',
            skillLevel: 4,
            craftingTime: 20,
          },
          {
            name: 'Copper Bracelet',
            materials: [
              { name: 'Copper', quantity: 3 },
              { name: 'Tools', quantity: 1 },
            ],
            result: 'Copper Bracelet',
            skillLevel: 3,
            craftingTime: 15,
          },
          {
            name: 'Bronze Sword',
            materials: [
              { name: 'Bronze', quantity: 5 },
              { name: 'Tools', quantity: 3 },
            ],
            result: 'Bronze Sword',
            skillLevel: 4,
            craftingTime: 25,
          },
          {
            name: 'Iron Shield',
            materials: [
              { name: 'Iron', quantity: 4 },
              { name: 'Tools', quantity: 2 },
            ],
            result: 'Iron Shield',
            skillLevel: 3,
            craftingTime: 18,
          },
          {
            name: 'Diamond Sword',
            materials: [
              { name: 'Diamond', quantity: 5 },
              { name: 'Tools', quantity: 3 },
            ],
            result: 'Diamond Sword',
            skillLevel: 6,
            craftingTime: 35,
          },
          {
            name: 'Emerald Amulet',
            materials: [
              { name: 'Emerald', quantity: 4 },
              { name: 'Tools', quantity: 2 },
            ],
            result: 'Emerald Amulet',
            skillLevel: 5,
            craftingTime: 25,
          },
          {
            name: 'Ruby Ring',
            materials: [
              { name: 'Ruby', quantity: 3 },
              { name: 'Tools', quantity: 1 },
            ],
            result: 'Ruby Ring',
            skillLevel: 4,
            craftingTime: 20,
          },
          {
            name: 'Sapphire Bracelet',
            materials: [
              { name: 'Sapphire', quantity: 3 },
              { name: 'Tools', quantity: 1 },
            ],
            result: 'Sapphire Bracelet',
            skillLevel: 4,
            craftingTime: 20,
          },
          {
            name: 'Gold Bar',
            materials: [
              { name: 'Gold', quantity: 5 },
            ],
            result: 'Gold Bar',
            skillLevel: 3,
            craftingTime: 15,
          },
          {
            name: 'Scrap Metal Shield',
            materials: [
            { name: 'Scrap Metal', quantity: 2 },
            { name: 'Junkyard Parts', quantity: 1 },
            ],
            result: 'Basic Shield',
            skillLevel: 1,
            craftingTime: 10,
            },
            {
            name: 'Water Bottle Refill',
            materials: [
            { name: 'Water Bottle', quantity: 1 },
            { name: 'Water', quantity: 1 },
            ],
            result: 'Refilled Water Bottle',
            skillLevel: 1,
            craftingTime: 5,
            },
            {
            name: 'First Aid Kit',
            materials: [
            { name: 'Medical Supplies', quantity: 1 },
            { name: 'Fabric', quantity: 1 },
            ],
            result: 'Basic First Aid Kit',
            skillLevel: 1,
            craftingTime: 10,
            },
            {
            name: 'Toolbox',
            materials: [
            { name: 'Toolkits', quantity: 1 },
            { name: 'Scrap Metal', quantity: 1 },
            ],
            result: 'Basic Toolbox',
            skillLevel: 1,
            craftingTime: 10,
            },
            {
            name: 'Improved Shield',
            materials: [
            { name: 'Scrap Metal', quantity: 2 },
            { name: 'Gunpowder', quantity: 1 },
            ],
            result: 'Upgraded Shield',
            skillLevel: 2,
            craftingTime: 15,
            },
            {
            name: 'Fuel Can Refill',
            materials: [
            { name: 'Fuel Can', quantity: 1 },
            { name: 'Fuel', quantity: 1 },
            ],
            result: 'Refilled Fuel Can',
            skillLevel: 1,
            craftingTime: 5,
            },
            {
            name: 'Medicinal Herbs',
            materials: [
            { name: 'Medical Supplies', quantity: 1 },
            { name: 'Rare Herbs', quantity: 1 },
                ],
                result: 'Improved Healing Item',
                skillLevel: 2,
                craftingTime: 10,
                },
                {
                name: 'Advanced Toolbox',
                materials: [
                { name: 'Toolkits', quantity: 1 },
                { name: 'Advanced Materials', quantity: 1 },
                ],
                result: 'Upgraded Toolbox',
                skillLevel: 2,
                craftingTime: 10,
                },
                {
                name: 'Fuel Injector',
                materials: [
                { name: 'Fuel Can', quantity: 1 },
                { name: 'Advanced Electronics', quantity: 1 },
                ],
                result: 'Upgraded Fuel Injector',
                skillLevel: 2,
                craftingTime: 10,
                },
                {
                name: 'Adrenaline Shot',
                materials: [
                { name: 'Medical Supplies', quantity: 1 },
                { name: 'Rare Chemicals', quantity: 1 },
                ],
                result: 'Temporary Health Boost',
                skillLevel: 3,
                craftingTime: 15,
                },
                {
                name: 'Mastercraft Toolbox',
                materials: [
                { name: 'Toolkits', quantity: 1 },
                { name: 'Exotic Materials', quantity: 1 },
                ],
                result: 'Expert-Level Toolbox',
                skillLevel: 3,
                craftingTime: 15,
                },
                {
                name: 'High-Octane Fuel',
                materials: [
                { name: 'Fuel Can', quantity: 1 },
                { name: 'Rare Chemicals', quantity: 1 },
                ],
                result: 'Upgraded Fuel',
                skillLevel: 3,
                craftingTime: 15,
                },
                {
                name: 'Quantum Battery',
                materials: [
                { name: 'Battery', quantity: 1 },
                { name: 'Rare Quantum Particles', quantity: 1 },
                ],
                result: 'Upgraded Battery',
                skillLevel: 3,
                craftingTime: 15,
                },
                {
                    name: 'Fuel Can Refill',
                    materials: [
                    { name: 'Fuel Can', quantity: 1 },
                    { name: 'Fuel', quantity: 1 },
                    ],
                    result: 'Refilled Fuel Can',
                    skillLevel: 1,
                    craftingTime: 5,
                },
                    {
                    name: 'Regenerative Serum',
                    materials: [
                    { name: 'Medical Supplies', quantity: 1 },
                    { name: 'Rare Biological Agents', quantity: 1 },
                    ],
                    result: 'Permanent Health Regeneration',
                    skillLevel: 4,
                    craftingTime: 30,
                    },
                    {
                    name: 'Legendary Toolbox',
                    materials: [
                    { name: 'Toolkits', quantity: 1 },
                    { name: 'Mythical Materials', quantity: 1 },
                    ],
                    result: 'Legendary Toolbox',
                    skillLevel: 4,
                    craftingTime: 30,
                    },
                    {
                    name: 'Quantum Fuel Cell',
                    materials: [
                    { name: 'Fuel Can', quantity: 1 },
                    { name: 'Rare Quantum Particles', quantity: 1 },
                    ],
                    result: 'Upgraded Fuel Cell',
                    skillLevel: 4,
                    craftingTime: 30,
                    },
                    {
                    name: 'Time Dilation Device',
                    materials: [
                    { name: 'Exotic Materials', quantity: 2 },
                    { name: 'Advanced Chronotechnology', quantity: 1 },
                    ],
                    result: 'Temporary Time Dilation',
                    skillLevel: 4,
                    craftingTime: 30,
                    },
                    {
                    name: 'Stealth Suit',
                    materials: [
                    { name: 'Advanced Materials', quantity: 2 },
                    { name: 'Rare Stealth Technology', quantity: 1 },
                    ],
                    result: 'Advanced Armor for Stealth',
                    skillLevel: 3,
                    craftingTime: 20,
                    },
                    {
                    name: 'EMP Grenade',
                    materials: [
                    { name: 'Gunpowder', quantity: 1 },
                    { name: 'Rare Electronics', quantity: 1 },
                    ],
                    result: 'Temporary Electronics Disruption',
                    skillLevel: 3,
                    craftingTime: 20,
                    },
                    {
                    name: 'Quantum Teleporter',
                    materials: [
                    { name: 'Fuel Can', quantity: 1 },
                    { name: 'Rare Quantum Particles', quantity: 1 },
                    ],
                    result: 'Teleportation to Any Location',
                    skillLevel: 5,
                    craftingTime: 40,
                    },
                    {
                    name: 'Nano Suit',
                    materials: [
                    { name: 'Exotic Materials', quantity: 2 },
                    { name: 'Advanced Technology', quantity: 1 },
                    ],
                    result: 'Advanced Armor for Protection',
                    skillLevel: 5,
                    craftingTime: 40,
                    },
                    {
                        name: 'Fuel Can Refill',
                        materials: [
                        { name: 'Fuel Can', quantity: 1 },
                        { name: 'Fuel', quantity: 1 },
                        ],
                        result: 'Refilled Fuel Can',
                        skillLevel: 1,
                        craftingTime: 5,
                        },
                        {
                        name: 'Improved Shield',
                        materials: [
                        { name: 'Scrap Metal', quantity: 2 },
                        { name: 'Gunpowder', quantity: 1 },
                        ],
                        result: 'Upgraded Shield',
                        skillLevel: 2,
                        craftingTime: 10,
                        },
                        {
                        name: 'Adrenaline Shot',
                        materials: [
                        { name: 'Medical Supplies', quantity: 1 },
                        { name: 'Rare Chemicals', quantity: 1 },
                        ],
                        result: 'Temporary Health Boost',
                        skillLevel: 3,
                        craftingTime: 15,
                        },

        // Add more recipes here
      ];
      this.playerSkills = {
        craftingLevel: 1,
        craftingSpeed: 1,
        craftingXP: 0,
      };
    }
  }    