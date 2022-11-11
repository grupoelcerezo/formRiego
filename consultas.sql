

 drop table tb_wap_rsuelo_pro_01

select *from tb_wap_rsuelo_pro_01

create table tb_wap_rsuelo_pro_01(
       id_rsuelo int identity(1,1)
      ,fecha datetime not null
      ,cultivo_revisado varchar(50) not null
      ,rancho_revisado varchar(50) not null
      ,metodo_aplicacion varchar(50) not null
      ,status_producto varchar(5) not null
	  ,humedad float not null
      ,presion_riego_valvula float not null
      ,presion_riego_cintilla_manguera float not null
      ,ph_gotero float not null
      ,ph_bomba float not null
      ,ph_tierra float not null
      ,ce_gotero float not null
      ,ce_bomba float not null
      ,ce_tierra float not null
      ,evapotranspiracion float not null
      ,comentario_general varchar(255) not null
	  ,fecha_actualizacion datetime not null
	  ,usuario varchar(50)  not null


	   constraint uq_wap_rsuelo_pro_01 unique(fecha, cultivo_revisado, rancho_revisado),
	   constraint pk_wap_rsuelo_pro_01 primary key(id_rsuelo)
  )

  insert into tb_wap_rsuelo_pro_01 values(  getdate(), 'fresas', 'casa-blanca', 'charco', 'no', 2.5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'manguera rota', getdate(), 'ABRAHAM VIEYRA RAZO')

  //--------------------------------------------------------------

  SELECT TOP (1000) [id_rciclo]
      ,[fecha]
      ,[cultivo_revisado]
      ,[rancho_revisado]
      ,[n_ciclo]
      ,[tiempo_ciclo]
      ,[n_base]
      ,[status_producto]
      ,[presion_riego_valvula]
      ,[presion_riego_cintilla_manguera]
      ,[ph_gotero]
      ,[ce_gotero]
      ,[mililitros_captacion]
      ,[ph_dren]
      ,[ce_dren]
      ,[mililitros_dren]
      ,[porcentaje_humedad]
      ,[evapotranspiracion]
      ,[comentario_general]
  FROM [GAECTIDB].[dbo].[tb_wap_rciclo_pro_01]

  drop table tb_wap_rciclo_pro_01

 create table tb_wap_rciclo_pro_01(
       id_rciclo int identity(1,1)
	   ,[usuario] varchar(50) not null
	   ,[fecha_creacion] date not null
      ,[fecha_actalizacion] date not null
      ,[cultivo_revisado] varchar(50) not null
      ,[rancho_revisado] varchar(50) not null
      ,[n_ciclo] int not null
      ,[tiempo_ciclo] float not null
      ,[n_base] int not null
      ,[status_producto] varchar(5) not null
      ,[presion_riego_valvula] float not null
      ,[presion_riego_cintilla_manguera] float not null
      ,[ph_gotero] float not null
      ,[ce_gotero] float not null
      ,[mililitros_captacion] float not null
      ,[ph_dren] float not null
      ,[ce_dren] float 
      ,[mililitros_dren] float 
      ,[porcentaje_humedad] float 
      ,[evapotranspiracion] float 
      ,[comentario_general] varchar(255) not null

	  constraint uq_wap_rciclo_pro_01 unique (fecha_creacion, cultivo_revisado, rancho_revisado, n_ciclo )
	  ,constraint pk_wap_rciclo_pro_01 primary key (id_rciclo)
  )

  insert into tb_wap_rciclo_pro_01 values('usuario' ,getdate(), getdate(), 'fresas', 'casa-blanca', 2, 3, 2, 'SI', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'pruebas en ciclos')




   create table tb_wap_rhidro_pro_01(
       [id_rhidro] int identity(1,1)
	  ,[fecha] datetime not null
      ,[cultivo_revisado] varchar(50)
      ,[rancho_revisado] varchar(50)
      ,[n_estacion] int not null
      ,[mililitros_captacion] float not null
      ,[ph_entrada] float not null
      ,[ce_entrada] float not null
      ,[mililitros_dren] float not null
      ,[ph_dren] float not null
      ,[ce_dren] float not null
      ,[variedad] varchar(50) not null
      ,[comentario_general] varchar(255) not null
	  ,[fecha_actualizacion] datetime not null
	  ,[usuario] varchar(50) not null

	    constraint uq_wap_rhidro_pro_01 unique (fecha, cultivo_revisado, rancho_revisado)
	  ,constraint pk_wap_rhidro_pro_01 primary key (id_rhidro)
  )

  insert into tb_wap_rhidro_pro_01 values(getdate(), 'fresas 2', 'casa-blanca', 2, 1, 2, 3, 4, 5, 6,'variedad 1','manguera rota', getdate(),'usuario')

