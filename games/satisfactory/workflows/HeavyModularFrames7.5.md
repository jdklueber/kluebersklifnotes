# Heavy Modular Frame - 7.5/min

## BOM

### Raw Materials

| Material  | Quantity / min |
| --------- | -------------- |
| Iron      | 570            |
| Limestone | 360            |
| Oil       | 240            |
| Water     | 300            |

### Building and Power (not including extractors)

| Building     | Quantity | Total Power (MW) |
| ------------ | -------- | ---------------- |
| Assembler    | 24       | 360              |
| Constructor  | 21       | 84               |
| Foundry      | 4        | 64               |
| Manufacturer | 2        | 110              |
| Refinery     | 14       | 420              |
| Smelter      | 9        | 36               |
| **TOTAL**    |          | **1074**         |

## Workflow

### A. Heavy Flexible Frame - 7.5/min

Manufacturer x 2

#### Inputs - Raw materials in **bold**.

| ID   | Part                    | Quantity / min | Verified |
| ---- | ----------------------- | -------------- | -------- |
| 1    | Modular Frame           | 37.5           | x        |
| 2    | Encased Industrial Beam | 22.5           | x        |
| 3    | Rubber                  | 150            | x        |
| 4    | Screw                   | 780            | x        |

#### Outputs

| ID   | Part                | Quantity/min | Destination ID |
| ---- | ------------------- | ------------ | -------------- |
| 1    | Heavy Modular Frame | 7.5          | **FINAL**      |

### B. Rubber - 160/min

Refinery x 8

#### Inputs - Raw materials in **bold**.

| ID   | Part          | Quantity / min | Verified |
| ---- | ------------- | -------------- | -------- |
| 1    | **Crude Oil** | 240            | x        |

#### Outputs

| ID   | Part              | Quantity/min | Destination ID |
| ---- | ----------------- | ------------ | -------------- |
| 1    | Heavy Oil Residue | 160          |                |
|      |                   | 120          | G1             |
|      |                   | 40           | Remainder      |
| 2    | Rubber            | 160          |                |
|      |                   | 150          | A3             |
|      |                   | 10           | Remainder      |

### C. Encased Industrial Beam - 24/min

BUILDING x #

#### Inputs - Raw materials in **bold**.

| ID   | Part       | Quantity / min | Verified |
| ---- | ---------- | -------------- | -------- |
| 1    | Steel Beam | 16             | x        |
| 2    | Concrete   | 120            | x        |

#### Outputs

| ID   | Part                    | Quantity/min | Destination ID |
| ---- | ----------------------- | ------------ | -------------- |
| 1    | Encased Industrial Beam | 24           |                |
|      |                         | 22.5         | A2             |
|      |                         | 1.5          | Remainder      |

### D. Wet Concrete - 240/min

Refinery x 3

#### Inputs - Raw materials in **bold**.

| ID   | Part          | Quantity / min | Verified |
| ---- | ------------- | -------------- | -------- |
| 1    | **Limestone** | 360            | x        |
| 2    | **Water**     | 300            | x        |

#### Outputs

| ID   | Part     | Quantity/min | Destination ID |
| ---- | -------- | ------------ | -------------- |
| 1    | Concrete | 240          |                |
|      |          | 120          | C2             |
|      |          | 80           | E2             |
|      |          | 40           | Remainder      |

### E. Molded Beam - 45/min

Assembler x 1

#### Inputs - Raw materials in **bold**.

| ID   | Part        | Quantity / min | Verified |
| ---- | ----------- | -------------- | -------- |
| 1    | Steel Ingot | 120            | x        |
| 2    | Concrete    | 80             | x        |

#### Outputs

| ID   | Part       | Quantity/min | Destination ID |
| ---- | ---------- | ------------ | -------------- |
| 1    | Steel Beam | 45           |                |
|      |            | 16           | C1             |
|      |            | 25           | K1             |
|      |            | 4            | Remainder      |

### F. Coke Steel - 400/min

Foundry x 4

#### Inputs - Raw materials in **bold**.

| ID   | Part     | Quantity / min | Verified |
| ---- | -------- | -------------- | -------- |
| 1    | **Iron** | 300            | x        |
| 2    | Coke     | 300            | x        |

#### Outputs

| ID   | Part        | Quantity/min | Destination ID |
| ---- | ----------- | ------------ | -------------- |
| 1    | Steel Ingot | 400          |                |
|      |             | 120          | E1             |
|      |             | 210          | I1             |
|      |             | 70           | Remainder      |

### G. Coke - 360/min

Refinery x 3

#### Inputs - Raw materials in **bold**.

| ID   | Part              | Quantity / min | Verified |
| ---- | ----------------- | -------------- | -------- |
| 1    | Heavy Oil Residue | 120            | x        |

#### Outputs

| ID   | Part | Quantity/min | Destination ID |
| ---- | ---- | ------------ | -------------- |
| 1    | Coke | 360          |                |
|      |      | 300          | F2             |
|      |      | 60           | Remainder      |

### H. Steeled Frame - 39/min

Assembler x 13

#### Inputs - Raw materials in **bold**.

| ID   | Part                  | Quantity / min | Verified |
| ---- | --------------------- | -------------- | -------- |
| 1    | Reinforced Iron Plate | 26             | x        |
| 2    | Steel Pipe            | 130            | x        |

#### Outputs

| ID   | Part          | Quantity/min | Destination ID |
| ---- | ------------- | ------------ | -------------- |
| 1    | Modular Frame | 39           |                |
|      |               | 37.5         | A1             |
|      |               | 1.5          | Remainder      |

### I. Steel Pipe - 140/min

Constructor x 7

#### Inputs - Raw materials in **bold**.

| ID   | Part        | Quantity / min | Verified |
| ---- | ----------- | -------------- | -------- |
| 1    | Steel Ingot | 210            | x        |

#### Outputs

| ID   | Part       | Quantity/min | Destination ID |
| ---- | ---------- | ------------ | -------------- |
| 1    | Steel Pipe | 140          |                |
|      |            | 130          | H2             |
|      |            | 10           | Remainder      |

### J. Reinforced Iron Plate - 30/min

Assembler x 6

#### Inputs - Raw materials in **bold**.

| ID   | Part       | Quantity / min | Verified |
| ---- | ---------- | -------------- | -------- |
| 1    | Iron Plate | 180            | x        |
| 2    | Screw      | 360            | x        |

#### Outputs

| ID   | Part                  | Quantity/min | Destination ID |
| ---- | --------------------- | ------------ | -------------- |
| 1    | Reinforced Iron Plate | 30           |                |
|      |                       | 26           | H1             |
|      |                       | 4            | Remainder      |

### K. Steel Screw - 1300/min

Constructor x 5

#### Inputs - Raw materials in **bold**.

| ID   | Part       | Quantity / min | Verified |
| ---- | ---------- | -------------- | -------- |
| 1    | Steel Beam | 25             | x        |

#### Outputs

| ID   | Part  | Quantity/min | Destination ID |
| ---- | ----- | ------------ | -------------- |
| 1    | Screw | 1300         |                |
|      |       | 780          | A4             |
|      |       | 360          | J2             |
|      |       | 100          | Remainder      |

### L. Iron Plate - 180/min

Constructor x 9

#### Inputs - Raw materials in **bold**.

| ID   | Part       | Quantity / min | Verified |
| ---- | ---------- | -------------- | -------- |
| 1    | Iron Ingot | 270            | x        |

#### Outputs

| ID   | Part       | Quantity/min | Destination ID |
| ---- | ---------- | ------------ | -------------- |
| 1    | Iron Plate | 180          |                |
|      |            | 180          | J1             |

### M. Iron Ingot - 270/min

Smelter x 9

#### Inputs - Raw materials in **bold**.

| ID   | Part         | Quantity / min | Verified |
| ---- | ------------ | -------------- | -------- |
| 1    | **Iron Ore** | 270            | x        |

#### Outputs

| ID   | Part       | Quantity/min | Destination ID |
| ---- | ---------- | ------------ | -------------- |
| 1    | Iron Ingot | 270          | L1             |

