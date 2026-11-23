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
@Table (name = "bloque_preguntas")
public class BloquePreguntas {

    @Id 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long idBloque;

    @Column
    private int nroBloque;

    @Column 
    private boolean completado;

}
