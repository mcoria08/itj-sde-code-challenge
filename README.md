# ITJ - SDE Platform Science Code Exercise

## Problem description  

Our sales team has just struck a deal with Acme Inc to become the exclusive provider for routing their product shipments via 3rd party trucking fleets. The catch is that we can only route one shipment to one driver per day.  

Each day we get the list of shipment destinations that are available for us to offer to drivers in our network. Fortunately our team of highly trained data scientists have developed a mathematical model for determining which drivers are best suited to deliver each shipment.  

With that hard work done, now all we have to do is implement a program that assigns each shipment destination to a given driver while
maximizing the total suitability of all shipments to all drivers.  


**The top-secret algorithm is:**
1. If the length of the shipment's destination street name is even, the base suitability score (SS) is the number of vowels in the driver&quot;s name multiplied by 1.5.
2. If the length of the shipment's destination street name is odd, the base SS is the number of consonants in the driver’s name multiplied by 1.  
3. If the length of the shipment's destination street name shares any common factors (besides 1) with the length of the driver’s name, the SS is increased by 50% above the base SS.  

## Requirements

Write an application in the language of your choice that assigns shipment destinations to drivers in a way that maximizes the total SS over the set of drivers. Each driver can only have one shipment and each shipment can only be offered to one driver. Your program should run on the command line and take as input two newline separated files, the first containing the street addresses of the shipment destinations and the second containing the names of the drivers. The output should be the total SS and a matching between shipment destinations and drivers. You do not need to worry about malformed input, but you should certainly handle both upper and lower case names.  

## Installation

Use the package manager [npm] to install the project:  

```
npm install
```

The information of the project is located in two separated files: **[./data]**  
> drivers.txt  
> shipments.txt

**drivers.txt** List of drivers.  
**shipments.txt** List of destinations/street of every shipment assigned to a driver.  

**Drivers**  
    Everardo Welch  
    Orval Mayert  
    Howard Emmerich  
    Izaiah Lowe  
    Monica Hermann  
    Ellis Wisozk  
    Noemie Murphy  
    Cleve Durgan  
    Murphy Mosciski  
    Kaiser Sose  

**Destinations/street**  
    215 Osinski Manors  
    9856 Marvin Stravenue  
    7127 Kathlyn Ferry  
    987 Champlin Lake  
    63187 Volkman Garden Suite 447  
    75855 Dessie Lights  
    1797 Adolf Island Apt. 744  
    2431 Lindgren Corners  
    8725 Aufderhar River Suite 859  
    79035 Shanna Light Apt. 322  

    



## Usage

To run the project:  
```
node index.js
```
## Result with the provided data

    Total Suitability Score (SS):  103  
    Driver: Everardo Welch, Address: 215 Osinski Manors  
    Driver: Murphy Mosciski, Address: 9856 Marvin Stravenue  
    Driver: Monica Hermann, Address: 7127 Kathlyn Ferry  
    Driver: Howard Emmerich, Address: 987 Champlin Lake  
    Driver: Orval Mayert, Address: 63187 Volkman Garden Suite 447  
    Driver: Noemie Murphy, Address: 75855 Dessie Lights  
    Driver: Izaiah Lowe, Address: 1797 Adolf Island Apt. 744  
    Driver: Kaiser Sose, Address: 2431 Lindgren Corners  
    Driver: Ellis Wisozk, Address: 8725 Aufderhar River Suite 859  
    Driver: Cleve Durgan, Address: 79035 Shanna Light Apt. 322  
