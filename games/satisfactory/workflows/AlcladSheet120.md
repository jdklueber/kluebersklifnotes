# Alclad Sheet - 240/min

## BOM

### Raw Materials

| Material  | Quantity / min |
| --------- | -------------- |
| Bauxite   | 240            |
| Coal      | 120            |
| Copper    | 90             |
| Limestone | 125            |
| Quartz    | 135            |
| Water     | 360            |

### Building and Power (not including extractors)

| Building  | Quantity | Total Power (MW) |
| --------- | -------- | ---------------- |
| Assembler | 11       | 165              |
| Foundry   | 4        | 64               |
| Refinery  | 3        | 90               |
| Smelter   | 3        | 12               |
| **TOTAL** |          | **331**          |

## Workflow

### A. Alclad Sheet - 120/min

Assembler x 8

#### Inputs - Raw materials in **bold**.

| ID   | Part           | Quantity / min | Verified |
| ---- | -------------- | -------------- | -------- |
| 1    | Aluminum Ingot | 240            | X        |
| 2    | Copper Ingot   | 80             | X        |

#### Outputs

| ID   | Part         | Quantity/min | Destination ID |
| ---- | ------------ | ------------ | -------------- |
| 1    | Alclad Sheet | 240          | STORAGE        |

### B. Aluminum Ingot - 240/min

Foundry x 4

#### Inputs - Raw materials in **bold**.

| ID   | Part           | Quantity / min | Verified |
| ---- | -------------- | -------------- | -------- |
| 1    | Aluminum Scrap | 360            | X        |
| 2    | Silica         | 300            | X        |

#### Outputs

| ID   | Part           | Quantity/min | Destination ID |
| ---- | -------------- | ------------ | -------------- |
| 1    | Aluminum Ingot | 240          | A1             |

### C. Aluminum Scrap - 360/min

Refinery x 1

#### Inputs - Raw materials in **bold**.

| ID   | Part             | Quantity / min | Verified |
| ---- | ---------------- | -------------- | -------- |
| 1    | Alumina Solution | 240            | X        |
| 2    | **Coal**         | 120            | X        |

#### Outputs

| ID   | Part           | Quantity/min | Destination ID |
| ---- | -------------- | ------------ | -------------- |
| 1    | Aluminum Scrap | 360          | B1             |

### D. Silica (Cheap Silica) - 315/min

Assembler x 3

#### Inputs - Raw materials in **bold**.

| ID   | Part          | Quantity / min | Verified |
| ---- | ------------- | -------------- | -------- |
| 1    | **Quartz**    | 135            | X        |
| 2    | **Limestone** | 125            | X        |

#### Outputs

| ID   | Part   | Quantity/min | Destination ID |
| ---- | ------ | ------------ | -------------- |
| 1    | Silica | 315          |                |
|      |        | 300          | B2             |
|      |        | 15           | SINK           |

### E. Copper Ingot - 90/min

Smelter x 3

#### Inputs - Raw materials in **bold**.

| ID   | Part       | Quantity / min | Verified |
| ---- | ---------- | -------------- | -------- |
| 1    | **Copper** | 90             | X        |

#### Outputs

| ID   | Part         | Quantity/min | Destination ID |
| ---- | ------------ | ------------ | -------------- |
| 1    | Copper Ingot | 90           |                |
|      |              | 80           | A2             |
|      |              | 10           | SINK           |

### F. Alumina Solution - 240/min

Refinery x 2

#### Inputs - Raw materials in **bold**.

| ID   | Part        | Quantity / min | Verified |
| ---- | ----------- | -------------- | -------- |
| 1    | **Bauxite** | 240            | X        |
| 2    | **Water**   | 360            | X        |

#### Outputs

| ID   | Part             | Quantity/min | Destination ID |
| ---- | ---------------- | ------------ | -------------- |
| 1    | Alumina Solution | 240          | C1             |
| 2    | Silica           | 100          | SINK           |

