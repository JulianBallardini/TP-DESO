package com.capitalhumano.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "configuracion_sistema")
public class ConfiguracionSistema {

    @Id
    private String clave;

    @Column(nullable = false)
    private String valor;

    @Column
    private String descripcion;
}
