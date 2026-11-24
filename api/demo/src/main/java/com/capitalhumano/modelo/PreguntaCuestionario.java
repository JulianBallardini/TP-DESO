package com.capitalhumano.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data 
@Entity 
@Table (name = "pregunta_cuestionario")

public class PreguntaCuestionario {
    // Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idPregCuest;

    @Column
    private int nroOrden;

    @Column 
    private boolean respondida;

    // Relaciones
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "bloque_id", nullable = false)
    private BloquePreguntas bloque;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "pregunta_id", nullable = false)
    private Pregunta pregunta;

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn (name = "opcion_pregunta_id")
    private OpcionPregunta opcionPregunta;

}
