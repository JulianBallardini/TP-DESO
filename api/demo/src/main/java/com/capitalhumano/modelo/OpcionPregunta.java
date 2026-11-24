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
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data 
@Entity 
@Table (name = "opcion_pregunta")

public class OpcionPregunta {

    // Atributos
    @Id 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long idOpcionPregunta;

    @Column 
    private double ponderacion;

    // Relaciones
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn (name = "pregunta_id", nullable = false)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Pregunta pregunta;

    @ManyToOne (fetch = FetchType.LAZY, optional = false)
    @JoinColumn (name = "item_opcion_respuesta_id", nullable = false)
    private ItemOpcionRespuesta itemOpcionRespuesta;
}
