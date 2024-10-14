# Recipes, Power Reqs, and Notes

## Logistics Patterns

* Manufacture locally to taps.
* Resist exports of non-complex parts (compound trees, Project Assembly.)
* Establish regional hubs for imports and exports.



## Buildings

| Name                   | Power Req | Footprint |
| ---------------------- | --------- | --------- |
| Assembler              | 15MW      | 10x15     |
| Constructor            | 4MW       | 8x10      |
| Foundry                | 16MW      | 10x9      |
| Manufacturer           | 55MW      | 18x20     |
| Miner                  | 5MW       | --        |
| Miner Mk2              | 12MW      | --        |
| Refinery               | 30MW      | 8x20      |
| Smelter                | 4MW       | 6x9       |
| Train Station/Platform | 50MW      | 34x16     |
| Water Extractor        | 20MW      | --        |

Note on Train Stations:  Smooth rail curves have a radius of 17m, indication a 34x34 minimum platform size.  Thus, a 5x5 foundation should cover a circle and a 3x3 should cover a smooth 90 degree turn.

## Power Buildings

| Plant            | Input 1       | Input 2  | Output     |
| ---------------- | ------------- | -------- | ---------- |
| Coal Generator   | 15 Coal       | 45 Water | 75 MW      |
| Fuel Generator   | 40 Fuel       |          | 250 MW     |
|                  | 7.5 Turbofuel |          | 250 MW     |
| Geothermal Plant | Impure Geyser |          | 50-150 MW  |
|                  | Normal Geyser |          | 100-300 MW |
|                  | Pure Geyser   |          | 200-600 MW |



## Recipes	

`*` indicates alternate recipe

**Bold Face** indicates parts needed for Project Assembly

Basic ingots not listed for brevity as they are a 1:1 resource.

## Aluminum
| Part             | Input 1              | Input 2         | Input 3 | Input 4 | Output 1             | Output 2  |
| ---------------- | -------------------- | --------------- | ------- | ------- | -------------------- | --------- |
| Alumina Solution | 120 Bauxite          | 180 Water       |         |         | 120 Alumina Solution | 50 Silica |
| Aluminum Scrap   | 240 Alumina Solution | 120 Coal        |         |         | 360 Aluminum Scrap   | 120 Water |
| Aluminum Ingot   | 90 Aluminum Scrap    | 75 Silica       |         |         | 60 Aluminum Ingot    |           |
| Alclad Sheet     | 30 Aluminum Ingot    | 10 Copper Ingot |         |         | 30 Alclad Sheet      |           |
| Aluminum Casing  | 90 Aluminum Ingot    |                 |         |         | 60 Aluminum Casing   |           |



### Caterium

| Part                  | Input 1      | Input 2  | Input 3 | Input 4 | Output 1     | Output 2 |
| --------------------- | ------------ | -------- | ------- | ------- | ------------ | -------- |
| Caterium Ingot        | 45 Caterium  |          |         |         | 15 Cat Ingot |          |
| * Pure Caterium Ingot | 24 Caterium  | 24 Water |         |         | 12 Cat Ingot |          |
| Quickwire             | 12 Cat Ingot |          |         |         | 60 QW        |          |



### Concrete

| Part           | Input 1       | Input 2   | Input 3 | Input 4 | Output 1    | Output 2 |
| -------------- | ------------- | --------- | ------- | ------- | ----------- | -------- |
| Concrete       | 45 Limestone  |           |         |         | 15 Concrete |          |
| * Wet Concrete | 120 Limestone | 100 Water |         |         | 80 Concrete |          |



### Copper

| Part                   | Input 1           | Input 2              | Input 3 | Input 4 | Output 1          | Output 2 |
| ---------------------- | ----------------- | -------------------- | ------- | ------- | ----------------- | -------- |
| **Cable**              | 60 Wire           |                      |         |         | 30 Cable          |          |
| * Coated Cable         | 37.5 Wire         | 15 Heavy Oil Residue |         |         | 67.5 Cable        |          |
| Copper Sheet           | 20 Copper Ingot   |                      |         |         | 10 Copper Sheet   |          |
| * Steamed Copper Sheet | 22.5 Copper Ingot | 22.5 Water           |         |         | 22.5 Copper Sheet |          |
| Wire                   | 30 Copper Ingot   |                      |         |         | 60 Wire           |          |
| * Fused Wire           | 12 Copper Ingot   | 3 Caterium Ingot     |         |         | 90 Wire           |          |
| * Iron Wire            | 12.5 Iron Ingot   |                      |         |         | 22.5 Wire         |          |



### Iron

| Part                            | Input 1          | Input 2       | Input 3 | Input 4 | Output 1        | Output 2 |
| ------------------------------- | ---------------- | ------------- | ------- | ------- | --------------- | -------- |
| * Basic Iron Ingot              | 25 Iron Ore      | 40 Limestone  |         |         | 50 Iron Ingot   |          |
| Iron Plate                      | 30 Iron Ingots   |               |         |         | 20 Iron Plate   |          |
| Iron Rod                        | 15 Iron Ingots   |               |         |         | 15 Iron Rod     |          |
| * Steel Rod                     | 12 Steel Ingot   |               |         |         | 48 Iron Rod     |          |
| **Modular Frame (MF)**          | 3 RIP            | 12 Iron Rod   |         |         | 2 MF            |          |
| * Bolted Modular Frame          | 7.5 RIP          | 140 Screw     |         |         | 5 MF            |          |
| * Steeled Frame                 | 2 RIP            | 10 Steel Pipe |         |         | 3 Modular Frame |          |
| **Reinforced Iron Plate (RIP)** | 30 Iron Plate    | 60 Screw      |         |         | 5 RIP           |          |
| * Bolted Iron Plate             | 90 Iron Plate    | 250 Screw     |         |         | 15 RIP          |          |
| * Stitched Iron Plate           | 18.75 Iron Plate | 37.5 Wire     |         |         | 5.625 RIP       |          |
| **Rotor (ROT)**                 | 20 Iron Rod      | 100 Screw     |         |         | 4 ROT           |          |
| Screw (SCR)                     | 10 Iron Rod      |               |         |         | 40 Screw        |          |
| * Cast Screw                    | 12.5 Iron Ingot  |               |         |         | 50 Screw        |          |
| * Steel Screw                   | 5 Steel Beam     |               |         |         | 260 Screw       |          |



### Oil

| Part               | Input 1      | Input 2  | Input 3 | Input 4 | Output 1     | Output 2 |
| ------------------ | ------------ | -------- | ------- | ------- | ------------ | -------- |
| Cannister          | 30 Plastic   |          |         |         | 60 Cannister |          |
| Coke               | 40 HOR       |          |         |         | 120 Coke     |          |
| Fuel               | 60 Crude Oil |          |         |         | 40 Fuel      | 30 Resin |
| 30 Plastic         | 30 Crude Oil |          |         |         | 20 Plastic   | 10 HOR   |
| * Residual Plastic | 60 Resin     | 20 Water |         |         | 20 Plastic   |          |
| **Rubber**         | 30 Crude Oil |          |         |         | 20 Rubber    | 20 HOR   |
| Polymer Resin      | 60 Oil       |          |         |         | 130 Resin    | 20 HOR   |



### Quartz

| Part           | Input 1     | Input 2        | Input 3 | Input 4 | Output 1 | Output 2 |
| -------------- | ----------- | -------------- | ------- | ------- | -------- | -------- |
| Quartz Crystal | 37.5 Quartz |                |         |         | 22.5 QC  |          |
| Silica         | 22.5 Quartz |                |         |         | 37.5 Si  |          |
| * Cheap Silica | 22.5 Quartz | 37.5 Limestone |         |         | 52.5 Si  |          |



### SAM

| Part           | Input 1  | Input 2 | Input 3       | Input 4 | Output 1 | Output 2 |
| -------------- | -------- | ------- | ------------- | ------- | -------- | -------- |
| Reanimated SAM | 120 SAM  |         |               |         | 30 ReSAM |          |
| SAM Fluctuator | 60 ReSAM | 50 Wire | 30 Steel Pipe |         | 10 SAMF  |          |



### Steel

| Part               | Input 1         | Input 2     | Input 3 | Input 4 | Output 1       | Output 2 |
| ------------------ | --------------- | ----------- | ------- | ------- | -------------- | -------- |
| **Steel Beam**     | 60 Steel Ingot  |             |         |         | 15 Steel Beam  |          |
| * Molded Beam      | 120 Steel Ingot | 80 Concrete |         |         | 45 Steel Beam  |          |
| Steel Ingot        | 45 Iron Ore     | 45 Coal     |         |         | 45 Steel Ingot |          |
| * Coke Steel Ingot | 75 Iron Ore     | 75 Coke     |         |         | 100 Steel      |          |
| Steel Pipe         | 30 Steel Ingot  |             |         |         | 20 Steel Pipe  |          |
| * Iron Pipe        | 100 Iron Ingot  |             |         |         | 25 Steel Pipe  |          |



## Complex Parts

### Multisource

| Part                          | Input 1              | Input 2              | Input 3       | Input 4 | Output 1                  | Output 2 |
| ----------------------------- | -------------------- | -------------------- | ------------- | ------- | ------------------------- | -------- |
| AI Limiter                    | 25 Copper Sheet      | 100 Quickwire        |               |         | 5 AI Limiter              |          |
| Black Powder                  | 15 Coal              | 15 Sulfur            |               |         | 30 Black Powder           |          |
| **Circuit Board**             | 15 Copper Sheet      | 30 Plastic           |               |         | 7.5 Circuit Board         |          |
| * Silicon Circuit Board       | 27.5 Copper Sheet    | 27.5 Silica          |               |         | 12.5 Circuit Board        |          |
| Compacted Coal                | 25 Coal              | 25 Sulfur            |               |         | 25 Compacted Coal         |          |
| **Computer**                  | 10 Circuit Board     | 20 Cable             | 40 Plastic    |         | 2.5 Computer              |          |
| * Crystal Computer            | 5 Circuit Board      | 1.667 CryOsc         |               |         | 3.333 Computer            |          |
| Crystal Oscillator            | 18 Quartz Crystal    | 14 Cable             | 2.5 RIP       |         | 1 CryOsc                  |          |
| Encased Industrial Beam (EIB) | 4 Steel Beam         | 30 Concrete          |               |         | 6 EIB                     |          |
| * Encased Industrial Pipe     | 24 Steel Pipe        | 20 Concrete          |               |         | 4 EIB                     |          |
| **Heavy Modular Frame**       | 10 Modular Frames    | 40 Steel Pipe        | 10 EIB        | 240 SCR | 2 HMF                     |          |
| * Heavy Flexible Frame        | 18.75 Modular Frames | 11.25 EIB            | 75 Rubber     | 390 SCR | 3.75 HMF                  |          |
| High Speed Connector          | 210 Quickwire        | 37.5 Cable           | 3.75 CB       |         | 3.75 High Speed Connector |          |
| **Motor**                     | 10 Rotor             | 10 Stator            |               |         | 5 Motor                   |          |
| SAM Fluctuator                | 60 ReSAM             | 50 Wire              | 30 Steel Pipe |         | 10 SAMF                   |          |
| Smokeless Powder              | 20 Black Powder      | 10 Heavy Oil Residue |               |         | 20 Smokeless Powder       |          |
| **Stator**                    | 15 Steel Pipe        | 40 Wire              |               |         | 5 Stators                 |          |
| * Quickwire Stator            | 16 Steel Pipe        | 60 Quickwire         |               |         | 8 Stator                  |          |
| Turbofuel                     | 22.5 Fuel            | 15 Compacted Coal    |               |         | 18.75 Turbofuel           |          |



### Project Assembly

| Part                    | Input 1            | Input 2         | Input 3         | Input 4 | Output 1        | Output 2 |
| ----------------------- | ------------------ | --------------- | --------------- | ------- | --------------- | -------- |
| Adaptive Control Unit   | 5 Auto Wire        | 5 Circuit Board | 1 HMF           | 2 Comp  | 1 ACU           |          |
| **Automated Wiring**    | 25 Stators         | 50 Cable        |                 |         | 2.5 AW          |          |
| Modular Engine          | 2 Motor            | 15 Rubber       | 2 Smart Plating |         | 1 ME            |          |
| **Smart Plating**       | 2 RIP              | 2 Rotor         |                 |         | 2 Smart Plating |          |
| * Plastic Smart Plating | 2.5 RIP            | 2.5 Rotor       | 7.5 Plastic     |         | 5 Smart Plating |          |
| Versatile Framework     | 2.5 Modular Frame  | 30 Steel Beam   |                 |         | 5 VF            |          |
| * Flexible Framework    | 3.75 Modular Frame | 22.5 Steel Beam | 30 Rubber       |         | 7.5 VF          |          |

