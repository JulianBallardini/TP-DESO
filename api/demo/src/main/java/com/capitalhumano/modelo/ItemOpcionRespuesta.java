package com.capitalhumano.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data 
@Entity 
@Table (name = "item_opcion_respuesta")

public class ItemOpcionRespuesta {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column 
    private int orden;

    @Column 
    private String descripcion;
    
}
