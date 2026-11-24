package com.capitalhumano.dao;

import java.util.Optional;

import com.capitalhumano.modelo.ConfiguracionSistema;

public interface IconfiguracionSistemaDao {

    public Optional<ConfiguracionSistema> obtener(String clave);
}
