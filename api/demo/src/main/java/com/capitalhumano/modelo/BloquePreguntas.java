package com.capitalhumano.modelo;

import java.util.UUID;

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
    private UUID idBloque;

    @Column
    private int nroBloque;

    @Column 
    private boolean completado;

}
