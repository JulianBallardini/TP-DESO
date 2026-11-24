package com.capitalhumano.modelo;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data 
@Entity 
@Table (name = "caracteristica_puesto")
public class CaracteristicaPuesto {

    @Id 
    private double ponderacionMinima;

}
